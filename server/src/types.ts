export type Env = {
	NFT_MARKETPLACE: KVNamespace;
	RESERVOIR_API_KEY: string;
};

export type BidPrice = {
	currency: {
		contract: string;
		name: "Ether";
		symbol: "ETH";
		decimals: number;
	};
	amount: {
		raw: string;
		decimal: number;
		usd: number;
		native: number;
	};
};

export type Token = {
	chainId: number;
	contract: string;
	tokenId: string;
	name: string;
	description: string;
	image: string;
	imageSmall: string;
	imageLarge: string;
	media: null;
	kind: string;
	isFlagged: boolean;
	isSpam: boolean;
	isNsfw: boolean;
	metadataDisabled: boolean;
	lastFlagUpdate: Date;
	lastFlagChange: Date | null;
	supply: string;
	remainingSupply: string;
	decimals: null;
	rarity: null;
	rarityRank: null;
	collection: {
		id: string;
		name: string;
		image: string;
		slug: string;
		symbol: null;
		creator: null;
		tokenCount: number;
		metadataDisabled: boolean;
		floorAskPrice: BidPrice;
	};
	owner: string;
	mintedAt: Date;
	createdAt: Date;
	mintStages: [];
};

export type Bid = {
	id: string;
	price: BidPrice;
	maker: string;
	validFrom: number;
	validUntil: number;
	source: {
		id: string;
		domain: string;
		name: string;
		icon: string;
		url: string;
	};
};

export type TokenMarket = {
	floorAsk: Bid;
	topBid: Partial<Bid> & { feeBreakdown: [] };
};

export type NFT = {
	token: Token;
	market: TokenMarket;
	updatedAt: Date | null;
};
