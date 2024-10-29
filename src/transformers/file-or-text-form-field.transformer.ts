// noinspection JSUnusedGlobalSymbols

export const FileOrTextFormFieldTransformer = ({ value }): string | object => {
    return value === "" ? null : value;
};
