const { pipeline } = require('stream');
const { createGzip } = require('zlib');
const { createReadStream, createWriteStream } = require('fs');
const { join } = require('path');

const compress = async (dest, file, archiveName) => {
    const gzip = createGzip();
    const initialFile = createReadStream(join(__dirname, dest, file));
    const resultFile = createWriteStream(join(__dirname, dest, archiveName));

    pipeline(initialFile, gzip, resultFile, (err) => new Error(err));

    return console.log('File successfully compressed')
};

compress('files', 'fileToCompress.txt', 'archive.gz')
