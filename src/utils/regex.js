export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isNotEmpty(str) {
    const notEmptyRegex = /^.+$/;
    return notEmptyRegex.test(str.trim());
 }