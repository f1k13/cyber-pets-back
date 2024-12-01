import { db } from './../db/index';
export class Repository {
	protected db;
	constructor() {
		this.db = db;
	}
}