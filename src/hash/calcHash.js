const crypto = require('node:crypto');
const { readdir, readFile } = require('node:fs/promises');
const { join } = require('node:path');

const calculateHash = async (dest, file) => {
    const fileContent = await readFile(join(__dirname, dest, file));
    const hash = crypto.createHash('sha256');

    hash.on('readable', () => {
        const data = hash.read();
        if (data) {
          console.log(data.toString('hex'));
        }
    });

    hash.write(fileContent);
    hash.end();
};

calculateHash('files', 'fileToCalculateHashFor.txt');
