import Koa from 'koa';
import bodyParser from 'koa-body';
import helmet from 'koa-helmet';
import cors from '@koa/cors';
import logger from 'koa-pino-logger';

import env from './config';
import { EnvKeys } from "./constants";

import errorMiddleware from './middlewares/errorHandler';
import throwAndLogMiddleware from './middlewares/throwAndLog';

import routes from './routes';

const level = env.get(EnvKeys.LOG_LEVEL);

const app = new Koa();

app.use(errorMiddleware);
app.use(logger({ level }));
app.use(throwAndLogMiddleware);
app.use(helmet());
app.use(cors());
app.use(bodyParser());

app.use(routes);

export default app;