import { Collection, NFT } from "@types";

export const TOKEN_KEY = "tokens";

interface TokensRes {
	tokens: NFT[];
	continuation: string;
}

interface CollectionsRes {
	collections: Collection[];
	continuation: string;
}

export async function getTokens() {
	try {
		const res = await fetch(
			"https://api.reservoir.tools/tokens/v7?limit=300&includeTopBid=true&minFloorAskPrice=0.1&sortBy=updatedAt",
		);

		if (!res.ok) {
			throw new Error("Failed to get tokens data");
		}

		const data: TokensRes = await res.json();

		const tokens = (data?.tokens || []).filter(
			({ token, market }) =>
				token.image && market.floorAsk && Boolean(market.floorAsk.price),
		);
		return tokens;
	} catch (err) {
		console.log("Failed to update tokens data");
		return null;
	}
}

export async function getCollections(sortBy = "allTimeVolume") {
	try {
		const res = await fetch(
			`https://api.reservoir.tools/collections/v7?sortBy=${sortBy}`,
		);

		if (!res.ok) {
			throw new Error("Failed to get collections data");
		}

		const data: CollectionsRes = await res.json();

		const tokens = data?.collections || [];
		return tokens;
	} catch (err) {
		console.log(`Failed to update ${sortBy} collections data`);
		return null;
	}
}
