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
       const result = toboggan(testData);
       expect(result).toEqual(7);
   });
});