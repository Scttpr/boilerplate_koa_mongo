import mongoose from 'mongoose';

import connectDatabase from '../../config/database';
import env from '../../config';
import { EnvKeys } from "../../constants";

const mongo = env.get(EnvKeys.MONGO);
const databaseName = env.get(EnvKeys.DATABASE);

const connectionString = `${mongo}/${databaseName}--test`;

export const connect = async (): Promise<void> => {
    await connectDatabase(connectionString);
};

export const disconnect = async (): Promise<void> => {
    await mongoose.disconnect();
    console.info("\x1b[32m", 'Mongo disconnected');
};