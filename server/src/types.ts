export type Env = {
	NFT_MARKETPLACE: KVNamespace;
	ALCHEMY_API_KEY: string;
};

// ─── Client-facing NFT shape ──────────────────────────────────────────────────

export type NFT = {
	token: {
		contract: string;
		tokenId: string;
		name: string;
		image: string;
		collection: {
			id: string;
			name: string;
			image: string;
			slug: string;
		};
	};
	market: {
		floorAsk: {
			price: {
				amount: {
					decimal: number;
				};
			} | null;
		};
	};
	updatedAt: string | null;
};

// ─── Client-facing Collection shape ──────────────────────────────────────────

export type Collection = {
	id: string;           // contract address (lowercase)
	slug: string;         // OpenSea slug
	name: string;
	symbol: string;
	image: string;
	banner: string;
	description: string;
	externalUrl: string;
	discordUrl: string;
	twitterUsername: string;
	tokenCount: string;
	onSaleCount: string;
	sampleImages: string[];
	primaryContract: string;
	floorAsk: {
		price: {
			amount: {
				decimal: number;
			};
		} | null;
	};
	volume: {
		"1day": number;
		"7day": number;
		"30day": number;
		allTime: number;
	};
	volumeChange: {
		"1day": number;
		"7day": number;
		"30day": number;
	};
};
