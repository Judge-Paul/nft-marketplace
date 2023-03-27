import React from "react";
import BG from "../assets/nft-page-bg.png"
import Timer from "../components/Timer";
import { RxGlobe } from "react-icons/rx";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NFTCard from "../components/cards/NFTCard";
import icon from "../assets/artists-avatars/Animakid.png";
import NFT from "../assets/highlighted-nft.png";

export default function NftPage() {
    return ( 
        <div className="text-white font-workSans">
            <img src={BG} alt="NFT Background" className="w-full" />
            <div className="lg:flex px-6 sm:px-32">
                <div className="mt-10 flex-1">
                    <h4 className="text-2xl lg:text-[3.3rem] font-semibold">
                        The Orbitians
                    </h4>
                    <p className="mt-8 text-xl text-[#858584]">
                        Minted On Sep 30, 2022
                    </p>
                    <p className="mt-8 text-2xl text-[#858584] font-spaceMono font-semibold">
                        Created By
                    </p>
                    <div className="flex mt-3">
                        <img src={icon} width="24px" />
                        <h4 className="ml-3 text-xl font-semibold">Orbitian</h4>
                    </div>
                    <p className="mt-8 text-2xl text-[#858584] font-spaceMono font-semibold">
                        Description
                    </p>
                    <div className="mt-6 text-lg md:text-2xl">
                        The Orbitians<br />
                        is a collection of 10,000 unique NFTs on the Ethereum blockchain, <br />
                        There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians. <br />
                        They live in a metal space machines, high up in the sky and only have one foot on Earth. <br />
                        These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. <br />
                        The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
                    </div>
                    <p className="mt-8 text-2xl text-[#858584] font-spaceMono font-semibold">
                        Details
                    </p>
                    <div className="flex text-2xl mt-5">
                        <RxGlobe className="text-[#858584] my-auto mr-3" />
                        View on Etherscan
                    </div>
                    <div className="flex text-2xl mt-5">
                        <RxGlobe className="text-[#858584] my-auto mr-3" />
                        View on Original
                    </div>
                    <p className="mt-8 text-2xl text-[#858584] font-spaceMono font-semibold">
                        Tags
                    </p>
                    <div className="block lg:flex gap-5 mt-3">
                        <h4 className="py-3 px-8 mt-4 w-max rounded-full bg-[#3B3B3B] font-semibold">
                            ANIMATION
                        </h4>
                        <h4 className="py-3 px-8 mt-4 w-max rounded-full bg-[#3B3B3B] font-semibold">
                            ILLUSTRATION
                        </h4>
                        <h4 className="py-3 px-8 mt-4 w-max rounded-full bg-[#3B3B3B] font-semibold">
                            MOON
                        </h4>
                    </div>
                </div>
                <div className="flex-1 mt-10">
                    <div className="mx-auto lg:mx-0 lg:ml-auto lg:w-3/4 xl:w-3/5">
                    <Timer bidButton={true} hour={1} />
                    </div>
                </div>
            </div>
            <div className="px-6 lg:px-32">
                <div className="flex justify-between mt-20">
                    <h4 className="text-2xl lg:text-[2.3rem] font-semibold">More From This Artist</h4>
                    <Link to="/artist">
                        <motion.button 
                            className="hidden sm:flex border-2 border-[#A259FF] rounded-2xl py-4 px-10 font-semibold"
                            whileHover={{ scale: 0.92 }}    
                        >
                            <AiOutlineArrowRight className="my-auto text-[#A259FF] mr-2" />
                            Go To Artist Page
                        </motion.button>
                    </Link>
                </div>
                <div className="grid md:grid-cols-2 xl:grid-cols-3 justify-items-center">
                    <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#3B3B3B]"} />
                    <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#3B3B3B]"} />
                    <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#3B3B3B]"} />
                    <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#3B3B3B]"} />
                    <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#3B3B3B]"} />
                    <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#3B3B3B]"} />
                <Link to="/artist">
                    <motion.button 
                        className="flex sm:hidden mt-6 w-80 justify-center border-2 border-[#A259FF] rounded-2xl py-4 px-10 font-semibold"
                        whileHover={{ scale: 0.92 }}    
                    >
                        <AiOutlineArrowRight className="my-auto text-[#A259FF] mr-2" />
                        Go To Artist Page
                    </motion.button>
                </Link>
                </div>
            </div>
        </div>
    )
}