import { ref } from 'vue';
import { useRouter } from '#app';
import { useSupabaseClient } from '#build/imports';
import { validateEmail } from '~/services/validators/emailValidationService';
import { validatePassword } from '~/services/validators/passwordValidationService';

/**
 * Service d'authentification pour gérer l'inscription des utilisateurs.
 * 
 * @returns {Object} Fournit des propriétés réactives et des méthodes pour l'authentification.
 */
export const useAuthService = () => {
    const client = useSupabaseClient();
    const router = useRouter();

    const email = ref('');
    const password = ref('');
    const confirmPassword = ref('');
    const errorMsg = ref(null);
    const successMsg = ref(null);

    /**
     * Inscrit un nouvel utilisateur avec un email et un mot de passe.
     * 
     * @async
     * @returns {Promise<void>} Exécute le processus d'inscription.
     */
    const registerAccount = async () => {
        errorMsg.value = null;
        successMsg.value = null;

        // Validation des champs obligatoires
        if (!email.value || !password.value || !confirmPassword.value) {
            errorMsg.value = "All fields are required.";
            return;
        }

        // Validation de l'email via le service de validation
        const emailError = validateEmail(email.value);
        if (emailError) {
            errorMsg.value = emailError;
            return;
        }

        // Validation du mot de passe via le service de validation
        const passwordError = validatePassword(password.value, confirmPassword.value);
        if (passwordError) {
            errorMsg.value = passwordError;
            return;
        }

        try {
            const { error } = await client.auth.signUp({ email: email.value, password: password.value });
            if (error) throw error;

            successMsg.value = 'Check your email to confirm your account.';
        } catch (error) {
            errorMsg.value = error.message || 'An error occurred during sign-up.';
        }
    };

    /**
     * Gère le processus de connexion des utilisateurs.
     * Envoie les identifiants de l'utilisateur à Supabase pour l'authentification.
     * Redirige vers la page de profil en cas de succès ou met à jour le message d'erreur en cas d'échec.
     */
    const handleSignIn = async () => {
        errorMsg.value = null;

        try {
            const { error } = await client.auth.signInWithPassword({ email: email.value, password: password.value });
            if (error) throw error;

            // await router.push('/profile');
        } catch (error) {
            errorMsg.value = error.message || 'An error occurred during sign-in.';
        }
    };

    /**
     * Gère le processus de déconnexion des utilisateurs.
     * Communique avec Supabase pour déconnecter l'utilisateur et redirige vers la page de connexion.
     * Met à jour les messages d'erreur en cas d'échec du processus.
     */
    const handleLogout = async () => {
        try {
            const { error } = await client.auth.signOut();
            if (error) throw error;

            await router.push('/login');
        } catch (error) {
            errorsMsg.value = error.message || 'An error occurred during logout.';
        }
    };

    return {
        email,
        password,
        confirmPassword,
        errorMsg,
        successMsg,
        registerAccount,
        handleSignIn,
    };
};
