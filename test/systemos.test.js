const os = require('os');
const { numberCPUs } = require('../systemos.js');

jest.mock('os');

describe('Os Functions', () => {
    test('should return the number of CPUs', () => {
        os.cpus.mockReturnValue(new Array(5));

        expect(numberCPUs()).toBe(5);
    });
});