const os = require('os');
const { numberCPUs, getSystemDetails, hasMemory } = require('../systemos.js');

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
        expect(details).toEqual({ architecture: 'x64', memory: '16.00' });
    });
    test('should return if enough memory is available', () => {
        os.freemem.mockReturnValue(2 * 1024 ** 3); 
        expect(hasMemory(1000)).toBe(true); 
        expect(hasMemory(3000)).toBe(false);
    })
});