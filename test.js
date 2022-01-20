const { isValidNumber } = require('./utils');

const incorrectSamples = [
    '1e',
    '1+1',
    '1-1',
    '1o',
    '1O',
    '1-',
    '1 0',
    ' 1 0 ',
    'hello',
];

const correctSamples = [
    '1',
    '10',
    '100',
    ' 1',
    ' 10',
    ' 100',
    '1 ',
    '10 ',
    '100 ',
    ' 1 ',
    ' 10 ',
    ' 100 ',
    '  1  ',
    '  10  ',
    '  100  ',
];

incorrectSamples.forEach((sample) => {
    console.assert(!isValidNumber(sample), `String "${sample}" seharusnya bukan angka`);
});

correctSamples.forEach((sample) => {
    console.assert(isValidNumber(sample), `String "${sample}" seharusnya angka`);
});
