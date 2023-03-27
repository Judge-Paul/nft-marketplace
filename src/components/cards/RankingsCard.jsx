import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function RankingsCard({position, icon, artist, change, sales, volume}) {
    return (
        <Link>
            <div className="flex mt-5 rounded-2xl px-4 sm:px-8 py-2.5 border border-[#3B3B3B] bg-[#3B3B3B] font-spaceMono text-white text-sm md:text-md lg:text-lg">
                <div className="flex flex-1">
                    <span className="bg-[#2B2B2B] rounded-full px-2.5 my-auto">{position}</span>
                    <motion.div whileHover={{ scale: 0.95 }} className="ml-2 sm:ml-7 flex">
                        <img src={icon} className="w-9 md:w-16" />
                        <h4 className="my-auto ml-2 sm:ml-5 text-xs xl:text-xl font-workSans font-medium sm:font-semibold truncate">{artist}</h4>
                    </motion.div>
                </div>
                <div className="hidden md:flex flex-1 justify-between lg:pr-20 my-auto">
                    <p className="text-[#00AC4F]">+{change}%</p>
                    <p>{sales}</p>
                    <p>{volume} ETH</p>
                </div>
                <p className="block md:hidden my-auto text-[0.70rem]">12.4 ETH</p>
            </div>
        </Link>
    )
}