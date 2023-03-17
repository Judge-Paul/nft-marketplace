import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import icon from "../assets/artists-avatars/Animakid.png"
import { HiOutlineEye } from "react-icons/hi2"
import NFT from "../assets/highlighted-nft.png"
import NFTCard from "./cards/NFTCard";

export default function Discover() {
    return (
        <div
            className="mt-20 mb-20 lg:mb-36 font-workSans text-white"
        >
            <div className="flex justify-between mb-20 px-8 sm:px-32">
                <div>
                    <h4 className="text-3xl lg:text-[2.5rem] font-bold">
                        Discover More NFTs
                    </h4>
                    <p className="text-lg lg:text-[1.35rem] mt-5 font-medium">
                        Explore New Trending Nfts
                    </p>
                </div>
                <motion.button
                    className="hidden md:flex bg-transparent border-2 border-[#A259FF] text-xs xl:text-lg ml-auto h-full px-14 py-4 rounded-2xl font-semibold"
                    whileHover={{ scale: 0.92 }}
                >
                    <HiOutlineEye className="mr-2 lg:text-lg text-[#A259FF] my-auto" size="20px" />
                    See All
                </motion.button>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-items-center lg:px-32">
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} />
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} />
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"md:hidden xl:block"} />
                <motion.button
                    className="flex md:hidden bg-transparent border-2 border-[#A259FF] justify-center py-4 w-80 rounded-2xl font-semibold mt-7"
                    whileHover={{ scale: 0.92 }}
                >
                    <HiOutlineEye className="mr-2 lg:text-lg text-[#A259FF] my-auto" size="20px" />
                    See All
                </motion.button>
            </div>
        </div>
    )
}