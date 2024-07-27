import React from "react";
import { Link } from "react-router-dom";
import { BiStoreAlt } from "react-icons/bi";
import { RxTwitterLogo, RxInstagramLogo, RxDiscordLogo } from "react-icons/rx";
import { AiOutlineYoutube, AiOutlineMail } from "react-icons/ai";
import { motion } from "framer-motion";

export default function Footer() {
	return (
		<div className="bg-[#3B3B3B]">
			<div className="grid grid-cols-1 lg:grid-cols-4 lg:justify-between mx-auto max-w-7xl py-10 px-8 sm:px-24 lg:px-10 xl:px-28 2xl:px-0">
				<div className="text-[#CCCCCC] font-workSans text-lg mt-10 lg:mt-0">
					<div className="flex mb-4">
						<BiStoreAlt className="text-[#A259FF]" size="30px" />
						<h4 className="mb-5 pl-3 text-xl text-white font-bold font-spaceMono">
							NFT Marketplace
						</h4>
					</div>
					<h4>
						NFT marketplace created by{" "}
						<a
							href="https://twitter.com/jadge_dev"
							className="text-blue-500 hover:text-blue-700"
						>
							Paul
						</a>
					</h4>
					<p className="mt-3">Join our community</p>
					<div className="flex mt-3">
						<a href="https://www.discord.com">
							<RxDiscordLogo size="30px" className="mr-3" />
						</a>
						<a href="https://www.youtube.com">
							<AiOutlineYoutube size="30px" className="mr-3" />
						</a>
						<a href="https://www.twitter.com/jadge_dev">
							<RxTwitterLogo size="30px" className="mr-3" />
						</a>
						<a href="https://www.instagram.com">
							<RxInstagramLogo size="30px" />
						</a>
					</div>
				</div>
				<div className="lg:ml-24 font-workSans text-[#CCCCCC] mt-10 lg:mt-0">
					<h4 className="mb-5 text-2xl text-white font-bold font-spaceMono">
						Explore
					</h4>
					<Link to="/marketplace">
						<p className="mb-3">Marketplace</p>
					</Link>
					<Link to="/rankings">
						<p className="mb-3">Rankings</p>
					</Link>
					<Link to="/connect">
						<p>Connect a wallet</p>
					</Link>
				</div>
				<div className="lg:ml-20 xl:justify-self-end lg:col-span-2 mt-10 lg:mt-0">
					<h4 className="text-2xl mb-5 text-white font-bold font-spaceMono">
						Join Our Weekly Digest
					</h4>
					<p className="text-[#CCCCCC] font-workSans w-64">
						Get exclusive promotions & updates straight to your inbox.
					</p>
					<div className="relative mt-3 w-full sm:w-[26rem]">
						<input
							type="text"
							className="py-4 px-5 sm:pr-48 w-full sm:w-[26rem] rounded-[20px] font-workSans outline-none"
							placeholder="Enter your email here"
						/>
						<motion.button
							className="hidden sm:block absolute inset-y-0 right-0 px-14 py-2 bg-[#A259FF] font-bold text-white rounded-[20px]"
							whileHover={{ scale: 0.95 }}
						>
							Subscribe
						</motion.button>
						<motion.button
							className="flex mt-4 sm:hidden justify-center py-4 w-full bg-[#A259FF] font-bold text-white rounded-[20px]"
							whileHover={{ scale: 0.95 }}
						>
							<AiOutlineMail size="20px" className="mr-3" />
							Subscribe
						</motion.button>
					</div>
				</div>
			</div>
		</div>
	);
}
