import 'reflect-metadata';
import express from 'express';
import { useExpressServer } from 'routing-controllers';
import {config} from './utils/config';

class App{
    private app: express.Application = express();
    private port: Number = Number(config('APP_PORT'));

    public constructor() {
        this.startup();
    }

    public startup(){
        useExpressServer(this.app,{
            cors: false,
            controllers: [__dirname + '/controllers/{*.ts,*.js}'],
        }).listen(this.port, () => console.log(`Listening ${this.port}`));
    }
}

new App();
