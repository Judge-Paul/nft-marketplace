import { Hono } from "hono";
import { cors } from "hono/cors";
import { Env } from "@types";
import { TOKEN_KEY, getCollectionBySlug } from "@utils";
import update from "./update";

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

// Collection detail — fetches live from Alchemy (not cached in KV)
app.get("/collection/:slug", async (c) => {
	const slug = c.req.param("slug");

	try {
		const result = await getCollectionBySlug(c.env.ALCHEMY_API_KEY, slug);

		if (!result) {
			c.status(404);
			return c.json({ error: "Collection not found" });
		}

		return c.json(result);
	} catch (err) {
		console.log(err);
		c.status(500);
		return c.json({ error: "Internal server error" });
	}
});

app.get("/store", async (c) => {
	await update(c.env);
	return c.json({ message: "Store updated" });
});

export default app;
