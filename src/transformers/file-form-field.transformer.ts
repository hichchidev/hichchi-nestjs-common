// noinspection JSUnusedGlobalSymbols

export const FileFormFieldTransformer = ({ value }): string | object => {
    return value === "" || value === "null" ? null : undefined;
};
