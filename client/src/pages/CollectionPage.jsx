import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { RxGlobe, RxDiscordLogo, RxTwitterLogo } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { formatNum } from "../libs/Functions";
import { toast } from "sonner";
import useCollection from "../hooks/useCollection";
import NotFound from "../components/CollectionNotFound";
import CollectionLoading from "../components/CollectionLoading";
import { Helmet } from "react-helmet";
import NFTCard from "../components/cards/NFTCard";

function copyToClipboard(text) {
	navigator.clipboard.writeText(text);
	toast.info("Address copied!");
}

export default function CollectionPage() {
	const { slug } = useParams();

	const { isPending, isError, data } = useCollection(slug);

	if (isError) {
		return <NotFound />;
	}

	if (isPending) {
		return <CollectionLoading />;
	}

	const { collection, tokens } = data;

	return (
		<div className="text-white font-workSans">
			<Helmet>
				<title>Collectiverse | {collection?.name}</title>
			</Helmet>
			{collection.banner && (
				<div
					className="bg-cover h-96 bg-center bg-white/90"
					style={{ backgroundImage: `url(${collection.banner})` }}
				></div>
			)}
			<div
				className={`max-w-7xl mx-auto px-8 sm:px-32 2xl:px-0 ${
					collection.banner ? "" : "mt-20"
				}`}
			>
				<a href={collection.externalUrl}>
					<motion.img
						whileHover={{ scale: 0.92 }}
						src={collection.image}
						className="border border-black mx-auto md:mx-0 rounded-3xl relative bottom-[3.5rem] w-28 h-28 cursor-pointer"
					/>
				</a>
				<div className="block lg:flex justify-between">
					<h4 className="mt-5 text-3xl lg:text-[3rem] font-bold block truncate">
						{collection.name}
					</h4>
					<div className="sm:flex gap-5">
						<motion.button
							whileHover={{ scale: 0.92 }}
							onClick={() => copyToClipboard(collection.id)}
							className="mt-5 flex justify-center bg-[#A259FF] px-6 py-4 font-bold rounded-2xl w-full"
						>
							<BiCopy size="20px" className="my-auto mr-2" />
							{collection.id.slice(0, 6) + "..." + collection.id.slice(-4)}
						</motion.button>
						<motion.button
							whileHover={{ scale: 0.92 }}
							className="mt-5 flex justify-center border-2 border-[#A259FF] px-7 py-4 font-bold rounded-2xl w-full"
						>
							<AiOutlinePlus
								size="22px"
								className="my-auto mr-2 text-[#A259FF]"
							/>
							Follow
						</motion.button>
					</div>
				</div>
				<div className="mt-10">
					<div className="flex place-items-center md:place-items-left">
						<div className="mr-20">
							<h4 className="font-spaceMono text-[1.5rem] lg:text-[1.9rem] font-black">
								{formatNum(collection.volume.allTime)}
							</h4>
							<p className="text-[0.9rem] lg:text-[1.2rem]">
								Total Sales (ETH)
							</p>
						</div>
						<div className="mr-20">
							<h4 className="font-spaceMono text-[1.5rem] lg:text-[1.9rem] font-black">
								{collection.tokenCount}
							</h4>
							<p className="text-[0.9rem] lg:text-[1.2rem]">Total NFTs</p>
						</div>
					</div>
				</div>
				<div className="mt-10">
					<h4 className="font-spaceMono text-[#858584] text-2xl font-semibold">
						Bio
					</h4>
					<p className="text-xl md:text-2xl font-medium mt-5">
						{collection.description
							? collection.description
							: "Nothing to see here."}
					</p>
					{collection.externalUrl &&
						collection.discordUrl &&
						collection.twitterUsername && (
							<h4 className="font-spaceMono text-[#858584] text-2xl font-semibold mt-10">
								Links
							</h4>
						)}
					<div className="flex mt-3 mb-8 text-[#858584]">
						{collection.externalUrl && (
							<a target="_blank" href={collection.externalUrl}>
								<RxGlobe size="40px" className="mr-5" />
							</a>
						)}
						{collection.discordUrl && (
							<a target="_blank" href={collection.discordUrl}>
								<RxDiscordLogo size="40px" className="mr-5" />
							</a>
						)}
						{collection.twitterUsername && (
							<a
								target="_blank"
								href={
									collection.twitterUsername
										? `https://www.twitter.com/${collection.twitterUsername}`
										: null
								}
							>
								<RxTwitterLogo size="40px" className="mr-5" />
							</a>
						)}
					</div>
					{!isError && (
						<>
							<div className="mt-10">
								<h4 className="text-center sm:text-xl font-semibold w-full py-4 border-b-[4px] border-white">
									Available NFTs
									{/* <span className="font-spaceMono ml-3 p-2 px-3 rounded-full bg-[#858584] text-xs sm:text-lg">
											{25}
										</span> */}
								</h4>
							</div>
							<div className="-mx-8 sm:-mx-32 grid md:grid-cols-2 xl:grid-cols-3 justify-items-center px-8 lg:px-32 pt-6 pb-10 border-b-[2px] border-black">
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
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	);
}
