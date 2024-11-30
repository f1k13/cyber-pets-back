import { drizzle } from "drizzle-orm/postgres-js";

import { env } from "../env";
import { schema } from "./schema/index";
import postgres = require("postgres");

if (!env) {
	throw new Error('env not defined');
}
const queryClient = postgres(env.DATABASE_URL);

export const db = drizzle(queryClient, { schema });