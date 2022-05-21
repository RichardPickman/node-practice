const { readdir } = require('fs/promises');
const { existsSync } = require('fs');
const { join } = require('path');

const list = async (dest) => {
    !existsSync(readdir(join(__dirname, dest))) && new Error('FS operation failed')

    return console.log(await readdir(join(__dirname, dest)))
}

list('files');
