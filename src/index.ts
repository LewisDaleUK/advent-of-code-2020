import fs from 'fs';

import { validatePassports } from "./passport";
import { passwords } from "./passwords";
import { report } from './report';
import { toboggan } from "./toboggan";

const readToArray = (fn : string) : Array<string> =>
    fs.readFileSync(fn)
        .toString('utf-8')
        .split('\n');

const expenses = readToArray('./inputs/day-one.txt')
    .map(str => parseInt(str));

const reportOutput = report(expenses);
console.log(reportOutput);

const validPasswords = passwords(readToArray('./inputs/day-two.txt'));
console.log(validPasswords);

const terrain = readToArray('./inputs/day-three.txt')
    .map(line => line.split(''));

const slopes = [
  [1,1],
  [3,1],
  [5,1],
  [7,1],
  [1,2],
];

const total = slopes.map(slope => toboggan(terrain, slope))
    .reduce((acc, val) => acc * val, 1);
console.log(total);

const validPassports = validatePassports(
    readToArray('./inputs/day-four.txt'),
    [
      ['byr', true],
      ['iyr', true],
      ['eyr', true],
      ['hgt', true],
      ['hcl', true],
      ['ecl', true],
      ['pid', true],
      ['cid', false],
    ]
);

console.log(validPassports)