import { passwords } from './passwords';

describe('Password validation', () => {
   test('It counts valid passwords correctly', () => {
      const input = [
          '1-3 a: abcde',
          '1-3 b: cdefg',
          '2-9 c: ccccccccc',
      ];
      expect(passwords(input)).toEqual(2);
   });
});