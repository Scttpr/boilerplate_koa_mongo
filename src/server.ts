import http from 'http';
import app from './app';
import env from './config';
import { EnvKeys } from './constants';
import connectDatabase from './config/database';

const port: number = env.get(EnvKeys.PORT);
const mongo: string = env.get(EnvKeys.MONGO);
const databaseName: string = env.get(EnvKeys.DATABASE);

const connectionString = `${mongo}/${databaseName}`;

async function initServer(): Promise<void> {
    await connectDatabase(connectionString);

    const server = http.createServer(app.callback());
    server.listen(port);
}

initServer();
