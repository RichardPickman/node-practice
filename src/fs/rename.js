const { mkdir, copyFile, readdir } = require('fs/promises');
const { existsSync } = require('fs');
const { join } = require('path');

const rename = async (dest, file, outputName) => {
    if (!existsSync(join(__dirname, dest, file)) || existsSync(join(__dirname, dest, outputName))) {
        throw new Error('FS operation failed')
    }

    await copyFile(join(__dirname, dest, file), join(__dirname, dest, outputName));

    return;
};

rename('files', 'wrongFilename.txt', 'properFilename.md')
