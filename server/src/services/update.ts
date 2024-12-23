import { Env } from "@types";
import { TOKEN_KEY } from "@utils";

export default async function update(env: Env) {
	try {
		const res = await fetch(
			"https://api.reservoir.tools/tokens/v7?limit=200&includeTopBid=true&minFloorAskPrice=0.1&sortBy=updatedAt",
		);

		if (!res.ok) {
			throw new Error("Failed to get tokens data");
		}

		const data: { tokens: any[] } = await res.json();

		env.NFT_MARKETPLACE.put(TOKEN_KEY, JSON.stringify(data?.tokens || []));
	} catch (err) {
		console.log("Failed to update tokens data");
		// console.log(err);
	}
}
