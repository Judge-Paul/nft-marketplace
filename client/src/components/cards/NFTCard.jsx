import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Loader from "../Loader";

export default function NFTCard({
	id,
	tokenId,
	image,
	title,
	artist,
	artistAvatar,
	price,
	bidToken,
	className,
	small,
}) {
	return (
		<Link
			to={`https://opensea.io/assets/ethereum/${id}/${tokenId}`}
			target="_blank"
			rel="noopener noreferrer"
		>
			<motion.div
				whileHover={{ scale: 0.97 }}
				className={`rounded-2xl ${className} ${
					small ? "w-[14.5rem] md:w-96" : "w-72"
				} mt-7`}
			>
				<img
					fetchpriority="high"
					src={image}
					className="rounded-t-2xl h-72 w-full"
					alt={title ? title : `#${tokenId} image`}
				/>
				<div className="p-7">
					<h4 className="text-2xl font-medium truncate">
						{title ? title : `#${tokenId}`}
					</h4>
					<div className="flex mb-3 mt-1">
						<img
							src={artistAvatar}
							width="40px"
							className="h-[40px] rounded-full"
							alt={title ? title : `#${tokenId} icon`}
						/>
						<p className="pl-2 my-auto truncate">{artist}</p>
					</div>
					<div className="flex justify-between">
						<div>
							<h4 className="mb-1 text-xs">Price</h4>
							<p>{price ? price.toFixed(2) : "N/A"} ETH</p>
						</div>
						<div>
							<h4 className="mb-1 text-xs">Highest Bid</h4>
							<p>
								{bidToken ? ` ${bidToken}` : `${Math.random().toFixed(2)} wETH`}
							</p>
						</div>
					</div>
				</div>
			</motion.div>
		</Link>
	);
}

export function LoadingNFTCard({ className, small }) {
	return (
		<div
			className={`rounded-3xl ${className} ${
				small ? "w-[14.5rem] md:w-96" : "w-72"
			} mt-7`}
		>
			<Loader className="rounded-t-3xl h-72 w-full" />
			<div className="p-7">
				<Loader className="h-8 w-3/4 mb-4 rounded-xl" />
				<div className="flex mb-3 mt-1">
					<Loader className="h-[40px] w-[40px] rounded-full" />
					<Loader className="h-6 w-1/2 ml-2 my-auto rounded-xl" />
				</div>
				<div className="flex justify-between">
					<div>
						<Loader className="h-4 w-12 mb-1 rounded-xl" />
						<Loader className="h-6 w-20 rounded-xl" />
					</div>
					<div>
						<Loader className="h-4 w-20 mb-1 rounded-xl" />
						<Loader className="h-6 w-20 rounded-xl" />
					</div>
				</div>
			</div>
		</div>
	);
}
