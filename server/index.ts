import { Context, Hono, Next } from "hono";
import { env } from "hono/adapter";
import { cors } from "hono/cors";

type ENV_VARS = {};

const app = new Hono();

app.use("/*", cors());

app.get("/", (c) => {
	return c.json("Hello World");
});

export default app;
