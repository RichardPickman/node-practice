import { config } from 'dotenv';

config();

export const parseArgs = () => {
    const [val1, val2, val3, val4] = process.argv.slice(2);

    console.log(`${val1.replace('--', '')} is ${val2}, ${val3.replace('--', '')} is ${val4}`)
};

parseArgs();
