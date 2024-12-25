import { Env } from "@types";
import { getCollections, getTokens, TOKEN_KEY } from "@utils";

export default async function update(env: Env) {
	const [
		tokens,
		allTimeVolume,
		oneDayVolume,
		sevenDaysVolume,
		thirtyDaysVolume,
	] = await Promise.all([
		getTokens(),
		getCollections(),
		getCollections("1DayVolume"),
		getCollections("7DayVolume"),
		getCollections("30DayVolume"),
	]);

	if (tokens && tokens?.length > 0) {
		await env.NFT_MARKETPLACE.put(TOKEN_KEY, JSON.stringify(tokens));
		console.log("Updated tokens data");
	}

	if (allTimeVolume && allTimeVolume?.length > 0) {
		await env.NFT_MARKETPLACE.put(
			"allTimeVolume",
			JSON.stringify(allTimeVolume),
		);
		console.log("Updated all time volume data");
	}

	if (oneDayVolume && oneDayVolume?.length > 0) {
		await env.NFT_MARKETPLACE.put("1DayVolume", JSON.stringify(oneDayVolume));
		console.log("Updated one day volume data");
	}

	if (sevenDaysVolume && sevenDaysVolume?.length > 0) {
		await env.NFT_MARKETPLACE.put(
			"7DayVolume",
			JSON.stringify(sevenDaysVolume),
		);
		console.log("Updated seven day volume data");
	}

	if (thirtyDaysVolume && thirtyDaysVolume?.length > 0) {
		await env.NFT_MARKETPLACE.put(
			"30DayVolume",
			JSON.stringify(thirtyDaysVolume),
		);
		console.log("Updated thirty day volume data");
	}
}
