import React from "react";
import BG from "../assets/connect-bg.webp";
import Metamask from "../assets/icons/Metamask.png";
import Coinbase from "../assets/icons/Coinbase.png";
import WalletConnect from "../assets/icons/WalletConnect.png";
import { motion } from "framer-motion";

export default function ConnectPage() {
	return (
		<div className="block md:flex 2xl:max-w-7xl 2xl:mx-auto">
			<img src={BG} className="w-full md:w-[50vw] 2xl:w-1/2" />
			<div className="text-white font-workSans my-auto p-10">
				<h4 className="text-3xl lg:text-[3.2rem] font-semibold pb-5">
					Connect Wallet
				</h4>
				<p className="text-lg lg:text-[1.35rem] mt-5 font-medium pb-10 xl:w-2/3 2xl:w-full">
					Choose a wallet you want to connect. There are several wallet
					providers.
				</p>
				<motion.a
					href="https://www.metamask.io"
					target="_blank"
					whileHover={{ scale: 0.94 }}
					className="flex border border-[#A259FF] bg-[#3B3B3B] rounded-3xl p-4 pl-7 xl:w-2/3 2xl:w-full"
				>
					<img src={Metamask} alt="Metamask Icon" />
					<h4 className="my-auto pl-4 text-lg sm:text-2xl font-bold">
						Metamask
					</h4>
				</motion.a>
				<motion.a
					href="https://www.coinbase.com"
					target="_blank"
					whileHover={{ scale: 0.94 }}
					className="flex border border-[#A259FF] bg-[#3B3B3B] rounded-3xl p-4 pl-7 xl:w-2/3 2xl:w-full mt-4"
				>
					<img src={Coinbase} alt="Metamask Icon" />
					<h4 className="my-auto pl-4 text-lg sm:text-2xl font-bold">
						Coinbase
					</h4>
				</motion.a>
				<motion.a
					href="https://www.walletconnect.com"
					target="_blank"
					whileHover={{ scale: 0.94 }}
					className="flex border border-[#A259FF] bg-[#3B3B3B] rounded-3xl p-4 pl-7 xl:w-2/3 2xl:w-full mt-4"
				>
					<img src={WalletConnect} alt="Metamask Icon" />
					<h4 className="my-auto pl-4 text-lg sm:text-2xl font-bold">
						WalletConnect
					</h4>
				</motion.a>
			</div>
		</div>
	);
}
