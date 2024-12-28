import { Navigate, useSearchParams } from "react-router-dom";
import NFTCard, { LoadingNFTCard } from "../components/cards/NFTCard";
import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import Cat from "../assets/not-found-bg.jpg";
import MotionComponent from "../components/MotionComponent";
import { motion } from "framer-motion";
import ErrorPage from "./ErrorPage";
import axios from "axios";
import { useMemo } from "react";
import { BiLoaderAlt } from "react-icons/bi";

export default function SearchPage() {
	const [searchParams] = useSearchParams();

	const query = searchParams.get("q");

	const {
		data,
		isPending,
		isFetchingNextPage,
		hasNextPage,
		fetchNextPage,
		isError,
	} = useInfiniteQuery({
		queryKey: ["search", query],
		queryFn: async ({ pageParam: continuation }) => {
			const res = await axios.get(`https://api.reservoir.tools/tokens/v7`, {
				params: {
					tokenName: query,
					limit: 12,
					continuation,
				},
			});

			if (res.data) {
				return res.data;
			}

			throw new Error("Search request failed.");
		},
		refetchOnWindowFocus: false,
		placeholderData: keepPreviousData,
		getNextPageParam: (lastPage) => lastPage?.continuation || undefined,
		enabled: !!query,
	});

	if (!query) {
		return <Navigate to="/marketplace" replace />;
	}

	const tokens = useMemo(() => {
		if (!data?.pages) {
			return undefined;
		}

		const mergedArray = [
			...new Map(
				data.pages
					.flatMap((page) => page.tokens)
					.map((item) => [
						`${item.token.contract}:${item.token.tokenId}`,
						item,
					]),
			).values(),
		];
		return mergedArray;
	}, [data]);

	return (
		<div className="text-white mt-10 lg:mt-14 font-workSans mx-auto max-w-[84rem]">
			<div className="px-8 sm:px-32 mb-10">
				<h4 className="text-3xl md:text-[3.5rem] font-bold">
					Results for "{query}"
				</h4>
			</div>
			{isError || tokens?.length === 0 ? (
				isError ? (
					<ErrorPage />
				) : (
					<NotFound />
				)
			) : (
				<div className="grid md:grid-cols-2 xl:grid-cols-3 justify-items-center px-8 sm:px-32 pt-6 pb-10 border-b-[2px] border-black">
					{isPending || !tokens ? (
						<>
							<LoadingNFTCard />
							<LoadingNFTCard />
							<LoadingNFTCard />
						</>
					) : (
						<>
							{tokens.map((nft) => (
								<NFTCard
									key={`${nft.token.collection.id}:${nft.token.tokenId}`}
									id={nft.token.collection.id}
									tokenId={nft.token.tokenId}
									image={nft.token.image}
									title={nft.token.name}
									artist={nft.token.collection.slug}
									artistAvatar={
										nft.token.collection.image
											? nft.token.collection.image
											: nft.token.collection.imageUrl
									}
									className={"bg-[#2B2B2B]"}
									price={nft?.market?.floorAsk?.price?.amount?.decimal}
									highestBid={(Math.random() * 10).toFixed(2)}
								/>
							))}
							{hasNextPage && (
								<motion.button
									disabled={isFetchingNextPage}
									onClick={fetchNextPage}
									className="flex justify-center items-center text-center gap-2.5 py-5 px-10 mt-10 text-white rounded-3xl font-semibold bg-[#A259FF] w-72 md:w-1/2 xl:w-2/5 md:col-span-2 xl:col-span-3"
									whileHover={isFetchingNextPage ? undefined : { scale: 0.92 }}
								>
									View More
									{isFetchingNextPage && (
										<BiLoaderAlt strokeWidth={2} className="animate-spin" />
									)}
								</motion.button>
							)}
						</>
					)}
				</div>
			)}
		</div>
	);
}

function NotFound() {
	return (
		<div className="px-8 sm:px-32 flex flex-col justify-center items-center mb-14">
			<img src={Cat} className="lg:w-1/2 mx-auto rounded-xl" />
			<h4 className="mt-8 text-3xl lg:text-[2.5rem] text-center font-bold">
				No Matches Found
			</h4>
			<p className="mt-4 text-md lg:text-lg lg:w-2/3 text-center">
				We couldn't find any NFTs that match your search. Explore our featured
				collections or try a different search term.
			</p>
			<MotionComponent
				as={Link}
				to="/marketplace"
				className="py-5 px-10 mt-10 text-white text-center rounded-3xl font-semibold bg-[#A259FF] w-full sm:w-max"
				whileHover={{ scale: 0.92 }}
			>
				Explore all NFTs
			</MotionComponent>
		</div>
	);
}
