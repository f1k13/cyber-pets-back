import { pgTable, text, integer, serial } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
	id: serial("id").primaryKey(),
	name: text("name").notNull(),
	tgId: integer("tgId").notNull(),
});
