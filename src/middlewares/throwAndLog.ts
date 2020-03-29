import { Context, Next } from "koa";

export default async (ctx: Context, next: Next): Promise<void> => {
    ctx.throwAndLog = (code: number, message: string): void =>  {
        ctx.log.error(message);
        ctx.throw(code, message);
    };

    await next();
};