const arr = [1, 2, 5, 5, 8, 7, 1, 1];

const count = (arr) => arr.length;

const sum = (array) => {
    return arr.reduce((a, b) => a + b, 0);
};

const min = (arr) => {
    arr.sort((a, b) => a - b);
    return arr[0];
};

const max = (arr) => Math.max(...arr);

const range = (arr) => max(arr) - min(arr);

const mean = (arr) => (sum(arr) / arr.length);

const median = (arr) => {
    const sorted = arr.slice().sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);
    return (sorted.length % 2 === 0) ? (sorted[middle - 1] + sorted[middle]) / 2 : sorted[middle];
};

const mode = function (arr) {
    let uniq = [...new Set(arr)];
    let count = uniq.map(v => [v, arr.filter(s => s === v).length]);
    return count.sort((a, b) => b[1] - a[1]).splice(0, 1);
};

const variance = (arr) => {
    return (arr.map((x) => Math.pow(x - mean(arr), 2)).reduce((a, b) => a + b)) / arr.length;
};

// Standard Deviation:
const std = (arr) => Math.sqrt(variance(arr));

// Frequency Distribution (%):
const freqDist = function (arr) {
    let uniq = [...new Set(arr)];
    let count = uniq.map(v => [v, arr.filter(s => s === v).length]);
    let afterSort = count.sort((a, b) => b[1] - a[1]);
    return afterSort.map((a) => (['value: ' + a[0], 'frequency: ' + a[1] * 100 / arr.length + '%']));
};

console.log('Count:', count(arr))
console.log('Sum: ', sum(arr))
console.log('Min: ', min(arr))
console.log('Max: ', max(arr))
console.log('Range: ', range(arr))
console.log('Mean: ', mean(arr))
console.log('Median: ', median(arr))
console.log('Mode: ', mode(arr))
console.log('Variance: ', variance(arr))
console.log('Standard Deviation: ', std(arr))
console.log('Frequency Distribution: \n', freqDist(arr))
