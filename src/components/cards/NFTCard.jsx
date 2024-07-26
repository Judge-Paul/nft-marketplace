import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NFTCard({
	id,
	tokenId,
	image,
	title,
	artist,
	artistAvatar,
	price,
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
								{price
									? (Math.random() * price).toFixed(2)
									: Math.random().toFixed(2)}{" "}
								wETH
							</p>
						</div>
					</div>
				</div>
			</motion.div>
		</Link>
	);
}
