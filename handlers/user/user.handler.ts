import { Handler } from './../handler';
import { FastifyReply, FastifyRequest } from "fastify";
import { IUserDto } from "./dto/user.dto";
import { UserService } from '@services/user/user.service';

export class UserHandler extends Handler {
	userService: UserService;

	constructor(userService: UserService) {
		super();
		this.userService = userService;
	}
	register = async (req: FastifyRequest, reply: FastifyReply) => {
		if (!req.body) {
			reply.send('error').status(400)
		}

	}

}