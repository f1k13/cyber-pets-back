import { FastifyInstance, FastifyReply, FastifyRequest, HookHandlerDoneFunction, RouteHandlerMethod } from "fastify";

export abstract class Router<T> {
	protected server: FastifyInstance;
	protected handler: T;
	public prefix: string;

	constructor(server: FastifyInstance, handler: T, prefix: string) {
		this.server = server;
		this.handler = handler;
		this.prefix = prefix;
	}
	protected createRouteHandler<Body = unknown, Params = unknown, Query = unknown, Headers = unknown>(
		handler: (
			request: FastifyRequest<{
				Body: Body;
				Params: Params;
				Querystring: Query;
				Headers: Headers;
			}>,
			reply: FastifyReply
		) => Promise<void> | void
	): RouteHandlerMethod {
		return async (request: any, reply) => {
			try {
				await handler(request, reply);
			} catch (error) {
				console.error(error);
			}
		};
	}
	abstract registerRoutes(fastify: FastifyInstance): void;

	register(
		fastify: FastifyInstance,
		done: HookHandlerDoneFunction,
	) {
		this.registerRoutes(fastify);
		done();
	}
}
