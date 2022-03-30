import ValidationException from "../validationError";
import { Number } from "./number";

export class PositiveNumber extends Number {

    constructor(value: number, message?: string) {
        super(value);
        this.ensureIsPositive(value, message);
    }

    private ensureIsPositive(value: number, message?: string): void {
        if (value == undefined || value == null || value < 0) {
            throw new ValidationException(message ?? 'El número debe ser positivo.');
        }
    }
}