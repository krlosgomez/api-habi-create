import { v4, validate } from 'uuid';
import ValidationException from './validationError';

export class UniqueId {
    readonly value: string;

    constructor(value: string) {
        this.ensureIsValidUuid(value);
        this.value = value;
    }

    static random(): UniqueId {
        return new UniqueId(v4());
    }

    private ensureIsValidUuid(id: string): void {
        if (!validate(id)) {
            throw new ValidationException("El id es inválido.");
        }
    }

    toString(): string {
        return this.value;
    }
}