/**
 * Convert object to JSON string
 * @param {any} object object to convert
 * @returns {string} JSON string
 */
export function toString(object: any): string {
    if (typeof object !== "object") {
        return "{}";
    }
    return JSON.stringify(object);
}

/**
 * Convert JSON string to object
 * @param {string} string JSON string to convert
 * @returns {any} object
 * @type {(string: string) => any}
 */
export function toJSON(string: string): any {
    try {
        return JSON.parse(string);
    } catch (error) {
        return {};
    }
}
