/**
 * Valide un mot de passe et, optionnellement, sa confirmation.
 * 
 * @param {string} password - Le mot de passe à valider.
 * @param {string|null} [confirmPassword=null] - Le mot de passe de confirmation (facultatif).
 * @returns {string|null} Retourne un message d'erreur si la validation échoue, sinon null.
 */
export const validatePassword = (password, confirmPassword = null) => {
    if (!password) {
        return "Password is required.";
    }

    // Longueur minimale
    if (password.length < 8) {
        return "Password must be at least 8 characters long.";
    }

    // Doit contenir un chiffre
    if (!/\d/.test(password)) {
        return "Password must contain at least one digit.";
    }

    // Doit contenir une lettre majuscule
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter.";
    }

    // Doit contenir une lettre minuscule
    if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter.";
    }

    // Validation de confirmation
    if (confirmPassword !== null && password !== confirmPassword) {
        return "Passwords do not match.";
    }

    return null; // Aucun problème
};
