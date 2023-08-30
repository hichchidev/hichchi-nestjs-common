export const DateTransformer = ({ value }): Date | undefined => {
    if (typeof value.getMonth === "function") {
        return value;
    }
    return new Date(value);
};
