import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function RankingsCard({position, icon, artist, change, sales, volume}) {
    function formatNum(num) {
        if (num >= 1000000) {
          return (num / 1000000).toFixed(2) + 'M';
        } else if (num >= 1000) {
          return (num / 1000).toFixed(1) + 'K';
        } else if (num === null || undefined || NaN) {
          return 0
        } else {
            return num.toFixed(2)
        }
    }
    return (
        <Link>
            <div className="flex mt-5 md:mt-7 rounded-2xl px-4 sm:px-8 py-2.5 border border-[#3B3B3B] bg-[#3B3B3B] font-spaceMono text-white text-md md:text-md lg:text-lg">
                <div className="flex flex-1">
                    <span className="bg-[#2B2B2B] rounded-full px-2.5 my-auto">{position}</span>
                    <motion.div whileHover={{ scale: 0.95 }} className="ml-3 sm:ml-7 flex">
                        <img src={icon} className="w-9 h-9 md:h-16 md:w-16 rounded-full" />
                        <h4 className="my-auto ml-2 sm:ml-5 text-md xl:text-xl font-workSans font-medium sm:font-semibold w-28 sm:w-52 xl:w-80 truncate">{artist}</h4>
                    </motion.div>
                </div>
                <div className="hidden md:flex flex-1 justify-between lg:pr-20 my-auto">
                    <p className="text-[#00AC4F]">+{formatNum(change)}%</p>
                    <p>{sales}</p>
                    <p>{formatNum(volume)} ETH</p>
                </div>
                <p className="block md:hidden my-auto text-[0.70rem]">{formatNum(volume)} ETH</p>
            </div>
        </Link>
    )
}