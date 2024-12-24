import { Context, Hono, Next } from "hono";
import { cors } from "hono/cors";
import { Env } from "@types";
import { TOKEN_KEY } from "@utils";

const app = new Hono<{ Bindings: Env }>();

app.use("/*", cors());

app.get("/", async (c) => {
	return c.json("Hello World!");
});

app.get("/tokens", async (c) => {
	try {
		const data = await c.env.NFT_MARKETPLACE.get(TOKEN_KEY);
		const tokens = JSON.parse(data || "null");

		if (!tokens || tokens.length === 0) {
			c.status(404);
			return c.json({ error: "No tokens found" });
		}

		return c.json(tokens);
	} catch (err) {
		console.log(err);
		c.status(500);
		return c.json({ error: "Internal server error" });
	}
});

app.get("/collections", async (c) => {
	let sortBy = c.req.query("sortBy");

	if (!sortBy) {
		sortBy = "allTimeVolume";
	}

	try {
		const data = await c.env.NFT_MARKETPLACE.get(sortBy);
		const collections = JSON.parse(data || "null");

		if (!collections || collections.length === 0) {
			c.status(404);
			return c.json({ error: "No collections found" });
		}

		return c.json(collections);
	} catch (err) {
		console.log(err);
		c.status(500);
		return c.json({ error: "Internal server error" });
	}
});

export default app;
