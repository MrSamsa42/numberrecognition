import { describe, it, expect } from 'vitest';
import { randomIntInRange } from './randomIntInRange';

describe("A method to generate a random integer within a specificed range, inclusive of both upper and lower bounds", () => {
    it("throws an error if the provided max value is not greater than the provided min value", () => {
        expect(() => randomIntInRange(5, 1)).toThrowError("Max value must be greater than min value.");
    });
    it("generates a random number within the specified range, inclusive of both upper and lower bounds", () => {
            let rand = randomIntInRange(1,2);
            expect(rand).toBeGreaterThanOrEqual(1);
            expect(rand).toBeLessThanOrEqual(2);
    });
});