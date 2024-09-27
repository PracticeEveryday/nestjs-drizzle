export type TTodoEssentialProps = Required<{
    readonly title: string;
    readonly isCompleted: boolean;
}>;

export type TTodoOptionalProps = Partial<{ readonly id: number }>;

export type TTodoProps = TTodoEssentialProps & Required<TTodoOptionalProps>;
