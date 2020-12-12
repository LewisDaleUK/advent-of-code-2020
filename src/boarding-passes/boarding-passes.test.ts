import { boardingPasses } from "./boarding-passes";

describe('Boarding passes', () => {
    it('should return 44, 5, 357 for the input FBFBBFFRLR', () => {
       const input = 'FBFBBFFRLR';
       const expected = [44, 5, 357];
       const result = boardingPasses(input);
       expect(result).toEqual(expected);
    });
    it('should return 70, 7, 567 for input BFFFBBFRRR', () => {
        const input = 'BFFFBBFRRR';
        const expected = [70, 7, 567];
        const result = boardingPasses(input);
        expect(result).toEqual(expected);
    });
    it('should return 14, 7, 119 for the input FFFBBBFRRR', () => {
        const input = 'FFFBBBFRRR';
        const expected = [14, 7, 119];
        const result = boardingPasses(input);
        expect(result).toEqual(expected);
    });
    it('should return 102, 4, 820 for the input BBFFBBFRLL', () => {
        const input = 'BBFFBBFRLL';
        const expected = [102, 4, 820];
        const result = boardingPasses(input);
        expect(result).toEqual(expected);
    });
})