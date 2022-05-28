const { pipeline } = require('stream');
const { createGunzip } = require('zlib');
const { createReadStream, createWriteStream } = require('fs');
const { join } = require('path');

const decompress = async (dest, file, archiveName) => {
    const gzip = createGunzip();
    const initialFile = createReadStream(join(__dirname, dest, file));
    const resultFile = createWriteStream(join(__dirname, dest, archiveName));

    pipeline(initialFile, gzip, resultFile, (err) => new Error(err));

    return console.log('File successfully decompressed')
};

decompress('files', 'archive.gz', 'fileToCompress.txt')
