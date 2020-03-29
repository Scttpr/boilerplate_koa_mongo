import { Context, Next } from "koa";

export default async (ctx: Context, next: Next): Promise<void> => {
    try {
        await next();
    } catch (err) {
        console.error("\x1b[31m", err.message, err);
        ctx.log.error(err.message);
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};