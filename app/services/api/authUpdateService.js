import { ref } from "vue";
import { useRouter } from "#app";
import { useSupabaseClient, useSupabaseUser } from "#build/imports";
import { validateEmail } from "~/services/validators/emailValidationService";
import { validatePassword } from "~/services/validators/passwordValidationService";

/**
 * Service pour gérer la mise à jour de l'email et du mot de passe utilisateur.
 * @returns {Object} Fournit des propriétés réactives et des méthodes pour la gestion des mises à jour.
 */
export const useAuthUpdateService = () => {
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const router = useRouter();

  const errorMsg = ref(null);
  const successMsg = ref(null);

  /**
   * Met à jour l'email de l'utilisateur connecté.
   * @async
   * @param {string} newEmail - Le nouvel email de l'utilisateur.
   * @returns {Promise<void>}
   */
  const updateEmail = async (newEmail) => {
    errorMsg.value = null;
    successMsg.value = null;

    // Validation de l'email via le service de validation
    const emailError = validateEmail(newEmail);
    if (emailError) {
      errorMsg.value = emailError;
      return;
    }

    try {
      if (!user.value) {
        throw new Error("User not logged in or invalid session.");
      }

      const { error } = await client.auth.updateUser({
        email: newEmail,
      });

      if (error) throw error;

      successMsg.value = "Email updated successfully.";
      await router.push("/profile");
    } catch {
      errorMsg.value =
        error.message || "An error occured while updating the email.";
    }
  };

  /**
   * Met à jour le mot de passe de l'utilisateur connecté avec validation.
   * @async
   * @param {string} newPassword - Le nouveau mot de passe de l'utilisateur.
   * @returns {Promise<void>}
   */
  const updatePassword = async (newPassword) => {
    errorMsg.value = null;
    successMsg.value = null;

    // Validation du mot de passe via le service de validation
    const passwordError = validatePassword(
      newPassword.value,
    );
    if (passwordError) {
      errorMsg.value = passwordError;
      return;
    }

    try {
      if (!user.value) {
        throw new Error("User not logged in or invalid session.");
      }

      // Vérifier l'ancien mot de passe
      const { error: authError } = await client.auth.signInWithPassword({
        email: user.value.email,
        password: oldPassword,
      });

      if (authError) {
        throw new Error("Incorrect old password.");
      }

      // Mettre à jour le mot de passe
      const { error } = await client.auth.updateUser({
        password: newPassword,
      });

      if (error) throw error;

      successMsg.value = "Password updated successfully.";
      await router.push("/profile");
    } catch (error) {
      errorMsg.value =
        error.message || "An error occurred while updating the password.";
    }
  };

  return {
    errorMsg,
    successMsg,
    updateEmail,
    updatePassword,
  };
};
