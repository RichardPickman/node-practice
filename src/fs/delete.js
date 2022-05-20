const { readdir, rm } = require('fs/promises');
const { existsSync } = require('fs');
const { join } = require('path');

const remove = async (dest, file) => {
    const files = await readdir(join(__dirname, dest))

    if (files.includes(file)) {
        await rm(join(__dirname, dest, file))
    }

    return;
};

remove('files', 'fileToRemove.txt')
