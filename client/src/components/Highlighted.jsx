import React from "react";
import { motion } from "framer-motion";
import { HiOutlineEye } from "react-icons/hi2";
import Timer from "./Timer";
import useTokens from "../hooks/useTokens";

export default function Highlighted() {
	const { data } = useTokens();

	const token = data[3].token;

	return (
		<div className="bg-[#A259FF]">
			<div
				className="bg-cover bg-center text-white font-workSans opacity-85 py-6 sm:pt-80 pb-12 mb-20"
				style={{
					backgroundImage: `url(${
						token?.imageLarge ??
						token?.image ??
						"https://pbs.twimg.com/media/FrcERKSXwAcUwJ9?format=jpg&name=large"
					})`,
				}}
			>
				<div className="mx-auto max-w-7xl flex flex-wrap justify-around 2xl:justify-between">
					<div className="mt-7 flex flex-col items-center sm:items-start">
						<div className="flex bg-[#3B3B3B] w-max px-5 py-2 rounded-full">
							<img
								src={token.collection.image}
								width="30px"
								className="rounded-full aspect-square"
								alt={`${token?.collection?.name || "collection"} image`}
							/>
							<p className="pl-4 my-auto font-medium">
								{(token?.collection?.name).slice(0, 20) || "Collection"}
							</p>
						</div>
						<h4 className="text-3xl truncate text-[2.2rem] lg:text-[3.2rem] font-workSans font-bold mt-7">
							{(token?.name).slice(0, 15) || "NFT"}
						</h4>
						<motion.a
							href={`https://opensea.io/assets/ethereum/${token.contract}/${token.tokenId}`}
							className="flex bg-transparent py-4 px-12 rounded-2xl font-semibold mt-8 text-black bg-white"
							whileHover={{ scale: 0.92 }}
						>
							<HiOutlineEye
								className="mr-2 lg:text-lg text-[#A259FF] my-auto"
								size="20px"
							/>
							See NFT
						</motion.a>
					</div>
					<div className="mt-7 md:mt-auto order-1 md:order-2">
						<Timer hour={24} />
					</div>
				</div>
			</div>
		</div>
	);
}
