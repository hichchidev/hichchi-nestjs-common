// noinspection JSUnusedGlobalSymbols

export const MultiValueFormFieldTransformer = ({ value }): string[] => {
    return Array.isArray(value) ? value : [value];
};
