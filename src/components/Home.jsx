import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { SlRocket } from "react-icons/sl"
import { Link } from "react-router-dom";
import NFTCard from "./cards/NFTCard";
import { AuthContext } from "../store/AuthContext";

export default function Home() {
    const { NFTsData } = useContext(AuthContext)
    const randomNum = Math.floor(Math.random() * 100)
    return (
        <div className="flex justify-center object-center xl:mx-36">
            <div className="mt-4 mb-20 lg:mt-20 px-8 sm:px-20 lg:px-0 grid lg:grid-cols-2 place-items-center xl:place-items-start gap-10 text-white font-workSans">
                <div className="md:w-[20rem] xl:w-full mt-0">
                    <div>
                        <h4 className="text-3xl lg:text-[2.5rem] xl:text-[4.2rem] xl:leading-[4.5rem] xl:pr-20 font-bold">
                            Discover Digital Art & Collect Nfts
                        </h4>
                    </div>
                    <p className="xl:pr-10 text-lg sm:text-[1.35rem] mt-5">
                        Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And Sell Art From More Than 20k Nft Artists.
                    </p>
                    <Link to="/register">
                        <motion.button
                        className="py-5 px-14 mt-10 text-white rounded-3xl font-semibold bg-[#A259FF] hidden md:flex"
                        whileHover={{ scale: 0.92 }}
                        >
                            <SlRocket className="mr-2"/>
                            Get Started
                        </motion.button>
                    </Link>
                </div>
                <motion.div 
                    whileHover={{ scale: 0.90 }}
                    animate={{
                        rotateX: [0, -15, 0, 15, 0],
                        rotateY: [-35, 0, 35, 0, -35],
                        transition: { duration: 8, repeat: Infinity }
                    }}
                    className="object-center px-2 lg:mx-14 backface-hidden rounded-2xl shadow-xl"
                >
                    {NFTsData.map((nft, index) => {
                    
                    if (index === randomNum) {
                        return (
                            <NFTCard 
                                key={nft.token.tokenId}
                                id={`${nft.token.collection.id}/${nft.token.tokenId}`}
                                image={nft.token.image}
                                title={nft.token.name}
                                artist={nft.token.collection.slug}
                                artistAvatar={nft.token.collection.image?nft.token.collection.image:nft.token.collection.imageUrl}
                                price={nft.market.floorAsk.price.amount.decimal}
                                highestBid={(Math.random() * 10).toFixed(2)}
                        />)
                    }
                })}
                </motion.div>
                <Link to="/register" className="w-full">
                    <motion.button
                        className="py-5 justify-center mt-10 text-white rounded-3xl font-semibold bg-[#A259FF] flex md:hidden w-full"
                        whileHover={{ scale: 0.92 }}
                        >
                            <SlRocket className="mr-2"/>
                            Get Started
                    </motion.button>
                </Link>
                <div className="mt-0 mx-auto">
                    <div className="flex place-items-left">
                    <div className="pr-10">
                        <h4 className="font-spaceMono text-[1.5rem] lg:text-[1.9rem] font-black">240k+</h4>
                        <p className="text-[0.9rem] lg:text-[1.5rem] font-medium">Total Sale</p>
                    </div>
                    <div className="pr-10">
                        <h4 className="font-spaceMono text-[1.5rem] lg:text-[1.9rem] font-black">100k+</h4>
                        <p className="text-[0.9rem] lg:text-[1.5rem] font-medium">Auctions</p>
                    </div>
                    <div>
                        <h4 className="font-spaceMono text-[1.5rem] lg:text-[1.9rem] font-black">240k+</h4>
                        <p className="text-[0.9rem] lg:text-[1.5rem] font-medium">Artists</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}