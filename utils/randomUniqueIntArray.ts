import { randomIntInRange } from "./randomIntInRange";

export function randomUniqueIntArray(min: number, max: number, length: number, randomInt: (min: number, max: number) => number = randomIntInRange): number[] {
    //create base array with all possible numbers in range:
    const baseArray = Array.from({length : max}, (_, v) => v + min); 

    const outArray: number[] = [];

    let count = length - 1;
    while(count--) {
        //get a random number between 0 and baseArray.length minus 1
        let i = randomInt(0, baseArray.length - 1);
        outArray.push(baseArray[i]);
        //fill the 'hole' with the number at the end, then pop it off
        baseArray[i] = baseArray[baseArray.length - 1];
        baseArray.pop();
    }

    console.log(outArray);
    return outArray;

}