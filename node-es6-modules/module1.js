export const life = "42";

export function add(x, y) {
    return x + y;
}

export function multiply(x, y) {
     return x * y;
}

export class Car {

    constructor(color) {
        this.color = color;
    }

    getCarColor() {
        return this.color;
    }
}