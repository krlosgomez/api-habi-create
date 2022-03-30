import ValidationException from "../validationError";

export class PlainAddress {
    readonly value: string;

    constructor(value: string) {
        this.ensureIsValid(value);
        this.value = value;
    }

    private ensureIsValid(value: string): void {
        if (value.length < 5) {
            throw new ValidationException("La dirección es muy corta, mínimo 5 caracteres.");
        }

        if (value.length > 150) {
            throw new ValidationException("La dirección es muy larga, máximo 150 caracteres.");
        }
    }

    toString(): string {
        return this.value;
    }
}