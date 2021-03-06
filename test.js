const {
    generateNPrimes,
    firstRowCellFormatter,
    firstColumnCellFormatter,
    cellFormatter
} = require('./index');

test('generateNPrimes function should generate N number of prime numbers', () => {
    expect(generateNPrimes(20).length).toBe(20);
});

// tests for firstRowCellFormatter function, should always return 5 char strings
test('A single digit number input should create a 5 char string with 2 spaces in front and back', () => {
    expect(firstRowCellFormatter(1)).toBe('  1  ');
});

test('A double digit number input should create a 5 char string with 1 space in front and 2 spaces in back', () => {
    expect(firstRowCellFormatter(10)).toBe(' 10  ');
});

// tests for firstColumnCellFormatter function, should always return 4 char strings
test('A single digit number input should create a 4 char string with 1 space in front and 1 space and vertical bar at the end', () => {
    expect(firstColumnCellFormatter(1)).toBe(' 1 |');
});

test('A double digit number input should create a 4 char string with 1 space and vertical bar at the end', () => {
    expect(firstColumnCellFormatter(10)).toBe('10 |');
});

// test for cellFormatter function, should always return 5 char strings
test('A single digit number input should create a 5 char string ending with a space and a vertical bar', () => {
    expect(cellFormatter(1)).toBe('  1 |');
});

test('A double digit number input should create a 5 char string with the number in between 2 spaces and a vertical bar at the end', () => {
    expect(cellFormatter(10)).toBe(' 10 |');
});

test('A triple digit number input should create a 5 char string with a space and a vertical bar at the end', () => {
    expect(cellFormatter(100)).toBe('100 |');
});