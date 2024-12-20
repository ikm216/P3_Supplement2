const os = require('os');

/**
 * Returns the number of CPUs available on the system.
 * @returns {number} The number of CPUs.
 */
function numberCPUs() {
    return os.cpus().length;
}

/**
 * Returns an object containing the system architecture and total memory.
 * @returns {{architecture: string, memory: number}} System details.
 */
function getSystemDetails(){
  const architecture = os.arch();
  const memory = (os.totalmem() / (1024 ** 3)).toFixed(2); 
  return { architecture, memory };
}

/**
 * Checks if the system has enough free memory to allocate the specified amount.
 * @param {number} requiredMemoryMB - Memory required in megabytes.
 * @returns {boolean} True if sufficient memory is available, otherwise false.
 */
function hasMemory(requiredMemoryMB){
  const memory = os.freemem() / (1024 ** 2);
  return memory >= requiredMemoryMB;
}

module.exports = { numberCPUs, getSystemDetails, hasMemory };