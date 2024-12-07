const os = require('os');

/**
 * Returns the number of CPUs available on the system.
 * @returns {number} The number of CPUs.
 */
function numberCPUs() {
    return os.cpus().length;
}

module.exports = { numberCPUs };