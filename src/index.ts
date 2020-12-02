import fs from 'fs';

import { passwords } from "./passwords";
import { report } from './report';

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