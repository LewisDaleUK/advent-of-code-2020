const { report } = require('./report');

describe('Report', () => {
    test('Generates the output for the default report', () => {
        const expenses = [
            1721,
            979,
            366,
            299,
            675,
            1456,
        ];
        const result = report(expenses);
        expect(result).toBe(514579);
    });

    test('Returns the correct output if two inputs add up to 2020', () => {
        const expenses = [
            1510,
            979,
            366,
            510,
            675,
            1456,
        ];
        const result = report(expenses);
        expect(result).toBe(770100);
    });

    test('Returns 0 if no two inputs add up to 2020', () => {
        const expenses = [
            200,
            800,
            4000,
            120,
        ];
        const result = report(expenses);
        expect(result).toBe(0);
    });
});