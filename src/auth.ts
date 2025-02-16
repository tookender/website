import { Pool } from "pg";
import { betterAuth } from "better-auth";
 
export const auth = betterAuth({
  socialProviders: {
    discord: { 
      clientId: process.env.DISCORD_ID as string, 
      clientSecret: process.env.DISCORD_SECRET as string, 
  },
  },
  database: new Pool({
    host: process.env.DATABASE_HOST as string,
    user: process.env.DATABASE_USER as string,
    password: process.env.DATABASE_PASSWORD as string,
    database: process.env.DATABASE_NAME as string,
    port: parseInt(process.env.DATABASE_PORT as string),
    max: 20,
  })
})