export class Number {
    readonly value: number;

    constructor(value: number) {
        this.value = value;
    }

    equalsTo(other: Number): boolean {
        return this.value === other.value;
    }

    isBiggerThan(other: Number): boolean {
        return this.value > other.value;
    }

    toString() {
        return this.value.toString();
    }
}