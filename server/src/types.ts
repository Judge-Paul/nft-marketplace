export type Env = {
	NFT_MARKETPLACE: KVNamespace;
	RESERVOIR_API_KEY: string;
};

type Currency = {
	contract: string;
	name: string;
	symbol: string;
	decimals: number;
};

type Amount = {
	raw: string;
	decimal: number;
	usd: number;
	native: number;
};

export type BidPrice = {
	currency: Currency;
	amount: Amount;
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

type Price = {
	currency: Currency;
	amount: Amount;
	netAmount?: Amount;
};

type MarketToken = {
	contract: string;
	tokenId: string;
	name: string | null;
	image: string;
};

type MarketInfo = {
	id: string | null;
	sourceDomain: string | null;
	price: Price | null;
	maker: string | null;
	validFrom: Date | null;
	validUntil: Date | null;
	token?: MarketToken;
};

type RoyaltyBreakdown = {
	bps: number;
	recipient: string;
	required?: boolean;
};

type Royalties = {
	recipient: string | null;
	breakdown: RoyaltyBreakdown[];
	bps: number;
};

type AllRoyalties = {
	custom?: RoyaltyBreakdown[];
	onchain?: RoyaltyBreakdown[];
	opensea?: RoyaltyBreakdown[];
	"pp-v2-backfill"?: RoyaltyBreakdown[];
};

type MetricChanges = {
	"1day": number;
	"7day": number;
	"30day": number;
	allTime?: number;
};

export type Collection = {
	chainId: number;
	id: string;
	slug: string;
	createdAt: Date;
	updatedAt: Date;
	name: string;
	symbol: string;
	contractDeployedAt: Date;
	image: string;
	banner: string;
	twitterUrl: string | null;
	discordUrl: string;
	externalUrl: string;
	twitterUsername: string;
	openseaVerificationStatus: string;
	magicedenVerificationStatus: string | null;
	description: string;
	metadataDisabled: boolean;
	isSpam: boolean;
	isNsfw: boolean;
	isMinting: boolean;
	sampleImages: string[];
	tokenCount: string;
	onSaleCount: string;
	primaryContract: string;
	tokenSetId: string;
	creator: string;
	isSharedContract: boolean;
	royalties: Royalties;
	allRoyalties: AllRoyalties;
	floorAsk: MarketInfo;
	topBid: MarketInfo;
	rank: MetricChanges;
	volume: MetricChanges;
	volumeChange: Omit<MetricChanges, "allTime">;
	floorSale: Omit<MetricChanges, "allTime">;
	floorSaleChange: Omit<MetricChanges, "allTime">;
	collectionBidSupported: boolean;
	ownerCount: number;
	contractKind: string;
	mintedTimestamp: Date | null;
	lastMintTimestamp: Date;
	mintStages: any[]; // Type can be expanded based on actual data structure
	supply: string;
	remainingSupply: string;
};
