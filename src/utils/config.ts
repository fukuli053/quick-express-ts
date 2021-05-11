import * as dotenv from 'dotenv';
dotenv.config();

export function config(key: string): string{
    if(typeof process.env[key] === 'undefined'){
        throw new Error(`This environment(${key}) not found`);
    }

    return process.env[key];
}