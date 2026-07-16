export function isEmail(value: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function assertNonEmpty(value: string, label: string): void {
    if (value.trim().length === 0) {
        throw new Error(`${label} must not be empty`);
    }
}
