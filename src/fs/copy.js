const { mkdir, copyFile, readdir } = require('fs/promises');
const { existsSync } = require('fs');
const { join } = require('path');

const copy = async (initialFolder, outputFolder) => {
    if (!existsSync(join(__dirname, initialFolder)) || existsSync(join(__dirname, outputFolder))) {
        throw new Error('FS operation failed!')
    }

    const filesArr = await readdir(join(__dirname, initialFolder));

    await mkdir(join(__dirname, outputFolder));

    filesArr.forEach(async (file) => {
        await copyFile(join(__dirname, initialFolder, file), join(__dirname, outputFolder, file))
    });

    return;
}

copy('files', 'files_copy');
