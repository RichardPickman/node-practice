const { fork } = require('child_process');
const { join } = require('path');

const spawnChildProcess = async (...args) => {
    const destination = join(__dirname, 'files', 'script.js');
    fork(`${destination}`, Array.from(args));  
};

spawnChildProcess(1,2,3,4,5,6);
