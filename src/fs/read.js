const { readFile } = require('fs/promises');
const { join } = require('path');

const read = async (dest, file) => {
    const stream = await readFile(join(__dirname, dest, file), { encoding: 'utf-8' })

    return console.log(stream);
};

read('files', 'fileToRead.txt')
