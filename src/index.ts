import fs from 'fs';

import { boardingPasses, findMissing } from "./boarding-passes";
import * as customs from './customs';
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
        ['byr', true, /^(19\d{2}|200[0-2])$/],
        ['iyr', true, /^20(1[0-9]|20)$/],
        ['eyr', true, /^20(2[0-9]|30)$/],
        ['hgt', true, /^(1([5-8][0-9]|9[0-3])cm|(59|6[0-9]|7[0-6])in)$/],
        ['hcl', true, /^#[0-9a-f]{6}$/],
        ['ecl', true, /^(amb|blu|brn|gry|grn|hzl|oth)$/],
        ['pid', true, /^\d{9}$/],
        ['cid', false],
    ]
);
console.log(validPassports)

const seats = readToArray('./inputs/day-five.txt')
    .map(boardingPasses)
const seatIds = seats.map(([column, row, id]) => id);
console.log(Math.max(...seatIds));
console.log(findMissing(seats));

console.log(customs.totalAnswers(readToArray('./inputs/day-six.txt')))


