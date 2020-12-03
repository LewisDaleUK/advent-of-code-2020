import { toboggan } from './toboggan';

const testData = `..##.......
#...#...#..
.#....#..#.
..#.#...#.#
.#...##..#.
..#.##.....
.#.#.#....#
.#........#
#.##...#...
#...##....#
.#..#...#.#`.split('\n').map(line => line.split(''));

describe('Toboggan', () => {
   it('should count the collisions with a slope of 3, 1', () => {
       const result = toboggan(testData, [3, 1]);
       expect(result).toEqual(7);
   });
   it('should count the collisions with slope of 1, 1', () => {
       const result = toboggan(testData, [1, 1]);
       expect(result).toEqual(2);
   });
   it('should count the collisions with slope of 5, 1', () => {
       const result = toboggan(testData, [5, 1]);
       expect(result).toEqual(3);
   });
   it('should count the collisions with slope of 7, 1', () => {
       const result = toboggan(testData, [7, 1]);
       expect(result).toEqual(4);
   });
   it('should count the collisions with slope of 1, 2', () => {
       const result = toboggan(testData, [1, 2]);
       expect(result).toEqual(2);
   });
});