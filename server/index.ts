import fastify from "fastify";
import { db } from "../db/index";
import { userTable } from "../db/schema/user/user.schema";
import { env } from "../env";

const server = fastify();

server.post("/users", async (request, reply) => {
	try {
		const [user] = await db.insert(userTable).values({
			name: "egor",
			tgId: 1,
		}).returning();

		return reply.status(201).send({ message: "User created", user });
	} catch (error) {
		console.error(error);
		return reply.status(500).send({ error: "Internal server error" });
	}
});

const start = async () => {
	try {
		await server.listen({ port: env.PORT, host: "127.0.0.1" });
		console.log(`Server running on ${env.PORT}`);
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

start();
