import { validatePassword } from '@/services/validators/passwordValidationService';

/**
 * Tests for the `validatePassword` function.
 */
describe('validatePassword', () => {
    it('should return an error if the password is empty', () => {
        expect(validatePassword('')).toBe("Password is required.");
    });

    it('should return an error if the password is too short', () => {
        expect(validatePassword('short')).toBe("Password must be at least 8 characters long.");
    });

    it('should return an error if the password lacks a digit', () => {
        expect(validatePassword('NoDigitsHere')).toBe("Password must contain at least one digit.");
    });

    it('should return an error if the password lacks an uppercase letter', () => {
        expect(validatePassword('alllowercase1')).toBe("Password must contain at least one uppercase letter.");
    });

    it('should return an error if the password lacks a lowercase letter', () => {
        expect(validatePassword('ALLUPPERCASE1')).toBe("Password must contain at least one lowercase letter.");
    });

    it('should return an error if the passwords do not match', () => {
        expect(validatePassword('ValidPass1', 'DifferentPass1')).toBe("Passwords do not match.");
    });

    it('should return null for a valid password', () => {
        expect(validatePassword('ValidPass1', 'ValidPass1')).toBeNull();
    });

    it('should return null if confirmation password is not provided but the password is valid', () => {
        expect(validatePassword('ValidPass1')).toBeNull();
    });
});
