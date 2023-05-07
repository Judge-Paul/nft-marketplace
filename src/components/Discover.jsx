import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import icon from "../assets/artists-avatars/Animakid.png";
import { HiOutlineEye } from "react-icons/hi2";
import NFT from "../assets/highlighted-nft.png";
import NFTCard from "./cards/NFTCard";
import { AuthContext } from "../store/AuthContext";

export default function Discover() {
    const { NFTsData } = useContext(AuthContext)
    return (
        <div
            className="mt-20 mb-20 lg:mb-36 font-workSans text-white"
        >
            <div className="flex justify-between px-8 sm:px-32">
                <div>
                    <h4 className="text-3xl lg:text-[2.5rem] font-bold">
                        Discover More NFTs
                    </h4>
                    <p className="text-lg lg:text-[1.35rem] mt-5 font-medium">
                        Explore New Trending Nfts
                    </p>
                </div>
                <Link to="/marketplace">
                    <motion.button
                        className="hidden md:flex bg-transparent border-2 border-[#A259FF] text-xs xl:text-lg ml-auto px-14 py-4 rounded-2xl font-semibold"
                        whileHover={{ scale: 0.92 }}
                    >
                        <HiOutlineEye className="mr-2 lg:text-lg text-[#A259FF] my-auto" size="20px" />
                        See All
                    </motion.button>
                </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-7 place-center">
                {NFTsData.map((nft, index) => {
                    if (index < 3) {
                        let className
                        className=index === 1 ?"sm:hidden xl:block bg-[#3B3B3B]" : "bg-[#3B3B3B]"
                        return (
                            <NFTCard 
                                key={nft.token.tokenId}
                                id={`${nft.token.collection.id}/${nft.token.tokenId}`}
                                image={nft.token.image}
                                title={nft.token.name}
                                artist={nft.token.collection.slug}
                                artistAvatar={nft.token.collection.image?nft.token.collection.image:nft.token.collection.imageUrl}
                                className={className}
                                price={nft.market.floorAsk.price.amount.decimal}
                                highestBid={(Math.random() * 10).toFixed(2)}
                        />)
                    }
                })}
                <Link to="/marketplace">
                    <motion.button
                        className="flex md:hidden bg-transparent border-2 border-[#A259FF] justify-center py-4 w-80 rounded-2xl font-semibold mt-7"
                        whileHover={{ scale: 0.92 }}
                    >
                        <HiOutlineEye className="mr-2 lg:text-lg text-[#A259FF] my-auto" size="20px" />
                        See All
                    </motion.button>
                </Link>
            </div>
        </div>
    )
}