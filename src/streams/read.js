const { createReadStream } = require("fs");
const { join } = require("path");

const read = async (dest, file) => {
    const stream = createReadStream(join(__dirname, dest, file), 'utf8');

    stream.on('data', function (chunk) {
        process.stdout.write(chunk.toString() + '\n');
    })
    
};

read('files', 'fileToRead.txt');
