import fastify, { FastifyInstance } from "fastify";
import { env } from "../env";
import { Init } from "./init";

export class App {
	private server: FastifyInstance;

	constructor() {
		this.server = fastify();
	}

	private setupApp() {
		const init = new Init(this.server);
		init.init();
	}

	public async start() {
		try {
			this.setupApp();

			await this.server.listen({ port: env.PORT, host: "127.0.0.1" });
			console.log(`Server running on ${env.PORT}`);
		} catch (err) {
			console.error(err);
			process.exit(1);
		}
	}
}

const app = new App();
app.start();
