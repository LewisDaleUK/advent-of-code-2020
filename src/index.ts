import fs from 'fs';

import { passwords } from "./passwords";
import { report } from './report';
import { toboggan } from "./toboggan";

const readToArray = (fn : string) : Array<string> =>
    fs.readFileSync(fn)
        .toString('utf-8')
        .split('\n');

const expenses = fs.readFileSync('./inputs/day-one.txt')
    .toString('utf-8')
    .split('\n')
    .map(str => parseInt(str));

const reportOutput = report(expenses);
console.log(reportOutput);

const validPasswords = passwords(
    fs.readFileSync('./inputs/day-two.txt')
        .toString('utf-8')
        .split('\n')
    );
console.log(validPasswords);

const terrain = readToArray('./inputs/day-three.txt')
    .map(line => line.split(''));
console.log(toboggan(terrain));