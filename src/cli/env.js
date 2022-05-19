import { config } from 'dotenv';

config();

export const parseEnv = () => {
    const { nick, status } = process.env;

    console.log(nick, status);
}

parseEnv();
