import { defineConfig } from "drizzle-kit";


export default defineConfig({
	dialect: "postgresql",
	schema: "./db/schema/**/*.ts",
	out: "./db/migrations",
	dbCredentials: {
		url: 'postgres://postgres:1234@localhost:5432/cyberPets',
	},
});