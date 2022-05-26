const { createWriteStream } = require("fs");
const { join } = require("path");
const readline = require('readline');


const write = async (dest, file) => {
    const stream = createWriteStream(join(__dirname, dest, file), { encoding: 'utf-8' });
    const rl = readline.createInterface({
        input: process.stdin,
        input: process.stdout,
    });

    rl.prompt();
    
    rl.on('line', (data) => {
        stream.write(data)
    });

};

write('files', 'fileToWrite.txt')
