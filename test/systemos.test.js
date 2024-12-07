const os = require('os');
const { numberCPUs } = require('../systemos.js');

jest.mock('os');

describe('Os Functions', () => {
    test('should return the number of CPUs', () => {
        os.cpus.mockReturnValue(new Array(5));

        expect(numberCPUs()).toBe(5);
    });
    test('should return system architecture and total memory ', () => {
        os.arch.mockReturnValue('x64');
        os.totalmem.mockReturnValue(16 * 1024 ** 3);
        const details = getSystemDetails();
        expect(details).toEqual({ architecture: 'x64', totalMemoryGB: '16.00' });
    });
});