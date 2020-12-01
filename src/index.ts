import fs from 'fs';

import { report } from './report';

const expenses = fs.readFileSync('./inputs/day-one.txt')
    .toString('utf-8')
    .split('\n')
    .map(str => parseInt(str));

const reportOutput = report(expenses);
console.log(reportOutput);