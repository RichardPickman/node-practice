import { fileURLToPath } from 'url';
import { dirname, sep } from 'path';
import { release, version } from 'os';
import { createServer as createServerHttp } from 'http';
import './files/c.mjs';
import * as AJSON from './files/a.json' assert { type: "json" };
import * as BJSON from './files/a.json' assert { type: "json" };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = AJSON;
} else {
    unknownObject = BJSON;
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);

console.log(`Path to current file is ${__filename}`);
console.log(`Path to current directory is ${__dirname}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export default {
    unknownObject,
    createMyServer,
};
