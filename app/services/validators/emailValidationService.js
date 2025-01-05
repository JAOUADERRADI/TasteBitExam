/**
 * Valide une adresse e-mail.
 * 
 * @param {string} email - L'adresse e-mail à valider.
 * @returns {string|null} Retourne un message d'erreur si la validation échoue, sinon null.
 */
export const validateEmail = (email) => {
    if (!email) {
        return "Email address is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return "Please provide a valid email address.";
    }

    return null; // Aucun problème
};
