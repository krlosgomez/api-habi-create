import ValidationException from "../validationError";

export class City {
    readonly value: string;

    constructor(value: string) {
        this.ensureIsValid(value);
        this.value = value;
    }

    private ensureIsValid(value: string): void {
        if (value.length < 3) {
            throw new ValidationException("La ciudad es muy corta, mínimo 3 caracteres.");
        }

        if (value.length > 150) {
            throw new ValidationException("La ciudad es muy larga, máximo 150 caracteres");
        }
    }

    toString(): string {
        return this.value;
    }
}