import React from "react";
import { motion } from "framer-motion";
import { SlRocket } from "react-icons/sl";
import { Link } from "react-router-dom";
import NFTCard from "./cards/NFTCard";
import useTokens from "../hooks/useTokens";

export default function Home() {
	const { data } = useTokens();
	const randomNum = Math.floor(Math.random() * data.length);
	const randomToken = data[randomNum];
	return (
		<div className="flex justify-center object-center max-w-7xl 2xl:mx-auto xl:mx-36">
			<div className="mt-4 mb-20 lg:mt-20 px-8 sm:px-20 lg:px-0 grid lg:grid-cols-2 place-items-center xl:place-items-start gap-10 text-white font-workSans">
				<div className="md:w-[20rem] px-4 xl:w-full mt-0">
					<div>
						<h4 className="text-3xl lg:text-[2.5rem] xl:text-[4.2rem] xl:leading-[4.5rem] xl:pr-20 font-bold">
							Discover Digital Art & Collect Nfts
						</h4>
					</div>
					<p className="xl:pr-10 text-lg sm:text-[1.35rem] mt-5">
						View tokens and collections on Collectiverse. Follow your favourite
						collectons and find NFTs to purchase on OpenSea.
					</p>
					<Link to="/register">
						<motion.button
							className="py-5 px-14 mt-10 text-white rounded-3xl font-semibold bg-[#A259FF] hidden md:flex"
							whileHover={{ scale: 0.92 }}
						>
							<SlRocket className="mr-2" />
							Get Started
						</motion.button>
					</Link>
				</div>
				<motion.div
					whileHover={{ scale: 0.9 }}
					animate={{
						rotateX: [0, -15, 0, 15, 0],
						rotateY: [-35, 0, 35, 0, -35],
						transition: { duration: 8, repeat: Infinity },
					}}
					className="object-center px-2 lg:mx-14 backface-hidden rounded-2xl shadow-xl"
				>
					<NFTCard
						key={randomToken.token.tokenId}
						id={randomToken.token.collection.id}
						tokenId={randomToken.token.tokenId}
						image={randomToken.token.image}
						title={randomToken.token.name}
						artist={randomToken.token.collection.slug}
						artistAvatar={
							randomToken.token.collection.image
								? randomToken.token.collection.image
								: randomToken.token.collection.imageUrl
						}
						price={randomToken?.market?.floorAsk?.price?.amount?.decimal}
						highestBid={randomToken?.market?.topBid?.price?.amount?.decimal}
						bidToken={randomToken?.market?.topBid?.price?.currency?.symbol}
						small={true}
					/>
				</motion.div>
				<Link to="/register" className="w-full">
					<motion.button
						className="py-5 justify-center mt-10 text-white rounded-3xl font-semibold bg-[#A259FF] flex md:hidden w-full"
						whileHover={{ scale: 0.92 }}
					>
						<SlRocket className="mr-2" />
						Get Started
					</motion.button>
				</Link>
			</div>
		</div>
	);
}
