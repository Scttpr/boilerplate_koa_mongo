import Router from '@koa/router';
import env from '../config';
import { EnvKeys } from "../constants";

const router = new Router();

router.get('/', (ctx) => {
    ctx.body = `API v${env.get(EnvKeys.VERSION)} -- OK`;
});

export default router.routes();