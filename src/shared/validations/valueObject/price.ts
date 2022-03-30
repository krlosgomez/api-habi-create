import ValidationException from "../validationError";
import { Number } from "./number";

export class Price extends Number {

    readonly value: number;

    constructor(value: number) {
        super(value);
        this.ensureIsPositive(value);
        this.value = value;
    }

    private ensureIsPositive(value: number): void {
        if (!value || value < 0) {
            throw new ValidationException('El presio debe ser positivo.');
        }
    }
}