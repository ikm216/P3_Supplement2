const os = require('os');

function numberCPUs() {
    return os.cpus().length;
}

module.exports = { numberCPUs };