const os = require('os');

/**
 * Returns the number of CPUs available on the system.
 * @returns {number} The number of CPUs.
 */
function numberCPUs() {
    return os.cpus().length;
}

function getSystemDetails(){
  const architecture = os.arch();
  const memory = (os.totalmem() / (1024 ** 3)).toFixed(2); 
  return { architecture, memory };
}

module.exports = { numberCPUs, getSystemDetails };