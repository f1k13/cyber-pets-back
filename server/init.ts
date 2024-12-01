import { UserRouter } from '../routes/user/user.route'
import { EntitiesModules } from './../consts/entities-enum';
import { FastifyInstance } from "fastify";
import { Router } from "routes/router";
import { UserHandler } from "../handlers/user/user.handler";
import { UserService } from '../services/user/user.service';
import { UserRepository } from '../repositories/user/user.repository';
export class Init {
	private server: FastifyInstance;

	constructor(server: FastifyInstance) {
		this.server = server;
	}
	init = async () => {
		const repositories = {
			[EntitiesModules.USER]: new UserRepository()
		}
		const services = {
			[EntitiesModules.USER]: new UserService(repositories[EntitiesModules.USER])

		}
		const handlers = {
			[EntitiesModules.USER]: new UserHandler(services[EntitiesModules.USER])
		}
		const routers: Router<unknown>[] = [
			new UserRouter(this.server, handlers[EntitiesModules.USER], `/${EntitiesModules.USER}`)
		]
		for (const route of routers) {
			console.log(`Registering router for prefix: ${route.prefix}`)
			await this.server.register(route.registerRoutes.bind(route), {

				prefix: route.prefix
			})
		}
	}
}
