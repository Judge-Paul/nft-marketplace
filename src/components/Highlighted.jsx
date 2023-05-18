import React from "react";
import icon from "../assets/artists-avatars/Animakid.webp"
import { motion } from "framer-motion";
import { HiOutlineEye } from "react-icons/hi2";
import Timer from "./Timer";

export default function Highlighted() {
    return (
        <div className="bg-[#A259FF]">
            <div className="bg-highlightedBg bg-cover bg-center text-white opacity-70 font-workSans py-6 sm:pt-80 pb-12 mb-20">
                <div className="flex flex-wrap justify-around">
                    <div className="mt-7">
                        <div className="flex bg-[#3B3B3B] w-max px-5 py-2 rounded-full">
                            <img src={icon} width="30px" />
                            <p className="pl-4 my-auto font-medium">Animakid</p>
                        </div>
                        <h4 className="text-3xl text-[2.2rem] lg:text-[3.2rem] font-workSans font-bold mt-7">
                            Magic Mashrooms
                        </h4>
                        <motion.button
                            className="flex bg-transparent py-4 px-12 rounded-2xl font-semibold mt-8 text-black bg-white"
                            whileHover={{ scale: 0.92 }}
                        >
                            <HiOutlineEye className="mr-2 lg:text-lg text-[#A259FF] my-auto" size="20px" />
                            See NFT
                        </motion.button>
                    </div>
                    <div className="mt-7 md:mt-auto order-1 md:order-2">
                        <Timer hour={24} />
                    </div>
                </div>
            </div>
        </div>
    )
}