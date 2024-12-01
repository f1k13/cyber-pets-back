import { pgTable, text, integer, serial, timestamp, boolean } from "drizzle-orm/pg-core";

export const userTable = pgTable("users", {
	id: serial("id").primaryKey(),
	tgId: integer("tgId").notNull().unique(),
	username: text("username"),
	firstName: text("first_name").notNull(),
	lastName: text("last_name"),
	languageCode: text("language_code"),
	isBot: boolean("is_bot").default(false),
	createdAt: timestamp("created_at").defaultNow().notNull(),
	lastActiveAt: timestamp("last_active_at"),
	isBlocked: boolean("is_blocked").default(false),
	role: text("role").default("user"),
});
