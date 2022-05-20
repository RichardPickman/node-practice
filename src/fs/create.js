const fs = require('fs');
const path = require('path');

const create = async () => {
    let stream = fs.createWriteStream(path.resolve(__dirname, 'files', 'fresh.txt'));

    stream.write('I am fresh and young');
};

create();

exports.create = create;
