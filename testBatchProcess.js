const assert = require('assert');
const batchProcess = require('./batchProcess');

describe('Batch Process', () => {
    it('should return an array with each element doubled', () => {
        let testData = [1, 2, 3];
        let expectedResult = [2, 4, 6];
        let result = batchProcess(testData);
        assert.deepStrictEqual(result, expectedResult);
    });

    it('should handle empty input array', () => {
        let testData = [];
        let expectedResult = [];
        let result = batchProcess(testData);
        assert.deepStrictEqual(result, expectedResult);
    });

    it('should handle negative numbers', () => {
        let testData = [-1, -2, -3];
        let expectedResult = [-2, -4, -6];
        let result = batchProcess(testData);
        assert.deepStrictEqual(result, expectedResult);
    });
});

