import { userTable } from "../../db/schema/user/user.schema";
import { Repository } from "../repository";

export class UserRepository extends Repository {
	getAll = async () => {
		return this.db.select().from(userTable);
	}
}