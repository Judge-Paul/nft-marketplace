import app from "@services/index";
import update from "@services/update";
import { Env } from "@types";

export default {
	async fetch(request: Request, env: Env) {
		return await app.fetch(request, env);
	},
	async scheduled(ctl: ScheduledController, env: Env, ctx: ExecutionContext) {
		await update(env);
	},
};
