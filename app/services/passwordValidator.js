/**
 * Validates a password to ensure it meets the specified requirements.
 * 
 *  Requirements:
 * - At least one lowercase letter.
 * - At least one uppercase letter.
 * - At least one numeric digit.
 * - At least one special character (e.g., @, $, !, %, *, ?, &).
 * - Minimum length of 8 characters.
 * 
 * @param {string} password - The password to validate.
 * @returns {boolean} True if the password meets the requirements, otherwise false.
 * 
 * Example usage:
 * const passwordToTest = "MyPassw0rd!";
 * console.log(validationPassword(passwordToTest)); // Outputs: true
 */
const validationPassword = (password) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// const passwordToTest = "MyPassw0rd!";
// console.log(validationPassword(passwordToTest));