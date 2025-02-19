import "dotenv/config";

import { z } from 'zod';


const envSchema = z.object({
    NODE_ENV: z.enum(['development', 'production']).default('development'),
    PORT: z.coerce.number().default(3000),
});



const _env = envSchema.safeParse(process.env);

if(!_env.success) {
    console.error("Invalid variables", _env.error.format())

    throw new Error("Invalid variables")

}


export const env = _env.data