export function randomIntInRange(min: number, max: number) : number {
    if(!(max > min)) throw new Error("Max value must be greater than min value.");
    return Math.floor( Math.random() * (max - min + 1) ) + min;
}