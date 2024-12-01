import { UserRepository } from "@repositories/user/user.repository";

export class UserService {
	userRepository: UserRepository;
	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

}