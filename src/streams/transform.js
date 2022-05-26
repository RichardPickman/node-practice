const { stdin, stdout } = require('process');
const { Transform, pipeline } = require('stream');

const transform = async () => {
    pipeline(stdin, reversed, stdout, (err) => new Error(err))
};

const reversed = new Transform({ transform(chunk, _, callback) {
    const result = chunk.toString().trim().split('').reverse().join('');
    callback(err => new Error(err), result + '\n');
}})

transform();
