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

    return {
        email,
        password,
        confirmPassword,
        errorMsg,
        successMsg,
        registerAccount,
    };
};
