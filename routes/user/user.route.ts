import { UserHandler } from './../../handlers/user/user.handler';
import { Router } from "../router";
import { IUserDto } from 'handlers/user/dto/user.dto';
export class UserRouter extends Router<UserHandler> {
	registerRoutes() {
		this.server.post(
			`${this.prefix}/register`,
			this.createRouteHandler<IUserDto>(async (request, reply) => {
				console.log("Handling user registration");
				return await this.handler.register(request, reply);
			})
		);
	}
}
