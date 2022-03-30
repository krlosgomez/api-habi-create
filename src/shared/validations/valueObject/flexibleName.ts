import ValidationException from "../validationError";


export class FlexibleName {
    readonly value: string;

    constructor(value: string) {
        this.ensureIsValid(value);
        this.value = value;
    }

    private ensureIsValid(value: string): void {
        if (value.length < 3) {
            throw new ValidationException("El nombre es muy pequeño, mínimo 3 caracteres.");
        }

        if (value.length > 200) {
            throw new ValidationException("El nombre es muy grande, máximo 200 caracteres.");
        }
    }

    toString(): string {
        return this.value;
    }
}