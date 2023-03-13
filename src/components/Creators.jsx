import React from "react";
import { motion } from "framer-motion";
import { SlRocket } from "react-icons/sl";
import Animakid from "../assets/artists-avatars/Animakid.png"

export default function Creators() {
    return (
        <div className="mt-20 mb-20 font-workSans px-8 sm:px-32 text-white">
            <div className="flex justify-between">
                <div>
                    <h4 className="text-3xl md:text-[2.5rem] font-bold">
                        Top Creators
                    </h4>
                    <p className="text-lg sm:text-[1.35rem] mt-5 font-medium mb-20">
                        Checkout Top Rated Creators On the NFT Marketplace
                    </p>
                </div>
                <motion.button
                    className="bg-transparent border-2 border-[#A259FF] h-full flex px-14 py-4 rounded-2xl font-semibold truncate"
                    whileHover={{ scale: 0.92 }}
                >
                    <SlRocket className="mr-2 text-lg text-[#A259FF]" />
                    View Rankings
                </motion.button>
            </div>
            <div className="flex justify-center gap-7 place-center">
                <div className="bg-[#3B3B3B] p-6 rounded-2xl">
                    <div className="mb-5 flex pr-7">
                        <h4 className="text-[#3B3B3B] bg-[#2B2B2B] rounded-full h-full px-3 py-1 font-spaceMono">1</h4>
                        <img src={Animakid} alt="" />
                    </div>
                    <h4 className="text-center font-semibold text-xl">Animakid</h4>
                    <p className="text-[#2B2B2B] font-semibold text-md pt-2">Total Sales: <span className="text-white text-md">34.53 ETH</span></p>
                </div>
            </div>
        </div>
    )
}