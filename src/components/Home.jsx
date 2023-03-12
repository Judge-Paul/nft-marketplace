import React from "react";
import Highlighted from "../assets/highlighted-nft.png"
import Avatar from "../assets/artists-avatars/Animakid.png"
import { motion } from "framer-motion";
import { SlRocket } from "react-icons/sl"

export default function Home() {
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
                    <motion.button
                    className="py-5 px-14 mt-10 text-white rounded-3xl font-semibold bg-[#A259FF] hidden md:flex"
                    whileHover={{ scale: 0.92 }}
                    >
                        <SlRocket className="mr-2"/>
                        Get Started
                    </motion.button>
                </div>
                <motion.div 
                    animate={{
                        rotateX: [0, -15, 0, 15, 0],
                        rotateY: [-35, 0, 35, 0, -35],
                        transition: { duration: 8, repeat: Infinity }
                    }}
                    className="w-88 lg:mx-14 backface-hidden shadow-xl"
                >
                    <div className="p-4 bg-[#404040] rounded-lg">
                        <img src={Highlighted} alt="Highlighted NFT" />
                        <div className="flex mt-10">
                            <img src={Avatar} width="70px" alt="Highlighted Avatar" />
                            <div className="my-auto pl-3">
                                <h4 className="text-white font-bold text-xl">animakid</h4>
                                <p className="text-[#2B2B2B] font-semibold text-xs md:text-lg">Total Sales: <span className="text-white text-xs md:text-lg">34.53 ETH</span></p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                <motion.button
                    className="py-5 justify-center mt-10 text-white rounded-3xl font-semibold bg-[#A259FF] flex md:hidden w-2/3"
                    whileHover={{ scale: 0.92 }}
                    >
                        <SlRocket className="mr-2"/>
                        Get Started
                    </motion.button>
                <div className="mt-0">
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