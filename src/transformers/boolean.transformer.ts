export const BooleanTransformer = ({ value }): boolean | undefined =>
    String(value) === "true" ? true : String(value) === "false" ? false : undefined;
