import { validateEmail } from '@/services/validators/emailValidationService';

/**
 * Tests for the `validateEmail` function.
 */
describe('validateEmail', () => {

    it('should return an error if the email is empty', () => {
        expect(validateEmail('')).toBe("Email address is required.");
    });

    it('should return an error if the email is invalid', () => {
        expect(validateEmail('invalid-email')).toBe("Please provide a valid email address.");
    });

    it('should return null for a valid email', () => {
        expect(validateEmail('test@example.com')).toBeNull();
    });

    it('should return an error for an email with spaces', () => {
        expect(validateEmail(' test @example.com ')).toBe("Please provide a valid email address.");
    });
});
