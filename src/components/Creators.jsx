import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { SlRocket } from "react-icons/sl";
import CreatorCard from "./cards/CreatorCard";
import { Link } from "react-router-dom";
import useCollections from "../hooks/useCollections";

export default function Creators() {
	const { data } = useCollections();
	return (
		<div className="mt-20 mb-20 lg:mb-36 font-workSans text-white max-w-7xl mx-auto">
			<div className="flex justify-between px-8 sm:px-32 2xl:px-0">
				<div>
					<h4 className="text-3xl lg:text-[2.5rem] font-bold">
						Top Collections
					</h4>
					<p className="text-lg lg:text-[1.35rem] mt-5 font-medium">
						Checkout Top Rated Collections in the NFT space
					</p>
				</div>
				<Link to="/rankings">
					<motion.button
						className="hidden md:flex bg-transparent border-2 border-[#A259FF] text-xs xl:text-lg ml-auto px-14 py-4 rounded-2xl font-semibold"
						whileHover={{ scale: 0.92 }}
					>
						<SlRocket className="mr-2 lg:text-lg text-[#A259FF]" size="20px" />
						View Rankings
					</motion.button>
				</Link>
			</div>
			<div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7 mt-20 justify-items-center lg:px-32 2xl:px-0">
				{data.map((collection, index) => {
					if (index < 12) {
						return (
							<CreatorCard
								key={collection.id}
								id={collection.id}
								slug={collection.slug}
								position={index + 1}
								name={collection.name}
								avatar={collection.image}
								sales={collection.volume.allTime}
							/>
						);
					}
				})}
				<Link to="/rankings">
					<motion.button
						className="flex md:hidden bg-transparent border-2 border-[#A259FF] justify-center py-4 w-72 rounded-2xl font-semibold"
						whileHover={{ scale: 0.92 }}
					>
						<SlRocket className="mr-2 text-lg text-[#A259FF]" />
						View Rankings
					</motion.button>
				</Link>
			</div>
		</div>
	);
}
