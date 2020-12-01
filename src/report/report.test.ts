const { report } = require('./report');

test('Generates the output for a report', () => {
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