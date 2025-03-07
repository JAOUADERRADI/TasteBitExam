import { ref } from "vue";
import { useSupabaseClient, useSupabaseUser } from "#build/imports";
import { useRouter } from "#app";

/**
 * Service pour gérer les profils utilisateur.
 * @returns {Object} Fournit des propriétés réactives et des méthodes pour la gestion des profils.
 */
export const useProfileService = () => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const router = useRouter();

  const profile = ref(null);
  const errorMsg = ref(null);
  const successMsg = ref(null);

  /**
   * Récupère le profil de l'utilisateur connecté.
   * @async
   * @returns {Promise<void>}
   */
  const fetchProfile = async () => {
    errorMsg.value = null;
    profile.value = null;

    try {
      if (!user.value) {
        throw new Error("User not logged in or invalid session.");
      }

      const { data, error } = await client
        .from("profile")
        .select("*")
        .eq("user_id", user.value.id)
        .single();

      if (error) throw error;

      profile.value = data;
    } catch (error) {
      errorMsg.value =
        error.message || "An error occurred while fetching the profile.";
    }
  };

  /**
   * Crée un nouveau profil pour l'utilisateur connecté.
   * @async
   * @param {Object} newProfile - Les données du nouveau profil.
   * @returns {Promise<void>}
   */
  const createProfile = async (newProfile) => {
    try {
      if (!user.value) {
        throw new Error("User not logged in or invalid session.");
      }

      const { error: insertError } = await client
        .from("profile")
        .insert({ ...newProfile, user_id: user.value.id });

      if (insertError) {
        throw insertError;
      }

      await router.push("/profile");
    } catch (error) {
      errorMsg.value =
        error.message || "An error occurred while creating the profile.";
    }
  };

  /**
   * Met à jour le profil de l'utilisateur connecté.
   * @async
   * @param {Object} updates - Les nouvelles données du profil.
   * @returns {Promise<void>}
   */
  const updateProfile = async (updates) => {
    errorMsg.value = null;
    successMsg.value = null;

    try {
      if (!user.value) {
        throw new Error("User not logged in or invalid session.");
      }

      const { error } = await client
        .from("profile")
        .update(updates)
        .eq("user_id", user.value.id);

      if (error) throw error;

      await fetchProfile();
      await router.push("/profile");
    } catch (error) {
      errorMsg.value =
        error.message || "An error occurred while updating the profile.";
    }
  };

  /**
   * Supprime le profil de l'utilisateur connecté.
   * @async
   * @returns {Promise<void>}
   */
  const deleteProfile = async () => {
    errorMsg.value = null;
    successMsg.value = null;

    try {
      if (!user.value) {
        throw new Error("User not logged in or invalid session.");
      }

      const { error } = await client
        .from("profile")
        .delete()
        .eq("user_id", user.value.id);

      if (error) throw error;

      successMsg.value = "Profile deleted successfully.";
      profile.value = null;
      await router.push("/");
    } catch (error) {
      errorMsg.value =
        error.message || "An error occurred while deleting the profile.";
    }
  };

  return {
    profile,
    errorMsg,
    successMsg,
    fetchProfile,
    createProfile,
    updateProfile,
    deleteProfile,
  };
};
