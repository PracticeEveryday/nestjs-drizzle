export type TTodoEssentialProp = Required<{
    readonly title: string;
    readonly projectId: string;
}>;

export type TTodoOptionalProps = Partial<{ readonly id: number }>;

export type ProjectProperties = TTodoEssentialProp & Required<TTodoOptionalProps>;
