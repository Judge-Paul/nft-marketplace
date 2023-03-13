import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CreatorCard({position, avatar, name, sales}) {
    return (
        <motion.div whileHover={{ scale: 0.92 }} className="bg-[#3B3B3B] px-3 py-5 rounded-2xl flex xl:block w-80 xl:w-full">
            <Link to="/artist">
                <div className="xl:mb-5 flex xl:pr-7 xl:justify-center static">
                    <h4 className="text-[#3B3B3B] bg-[#2B2B2B] rounded-full absolute xl:static xl:h-full px-2 xl:px-3 xl:py-1 font-spaceMono">{position}</h4>
                    <img src={avatar} className="rounded-full w-14 xl:w-3/5" alt="" />
                    <div className="block xl:hidden pl-5">
                        <h4 className="font-semibold text-xl">{name}</h4>
                        <p className="text-[#2B2B2B] font-semibold text-md pt-2">Total Sales: <span className="text-white text-md">{sales} ETH</span></p>
                    </div>
                </div>
                <div className="hidden xl:block text-center">
                    <h4 className="hidden xl:block font-semibold text-xl">{name}</h4>
                    <p className="text-[#2B2B2B] font-semibold text-md pt-2">Total Sales: <span className="text-white text-md">{sales} ETH</span></p>
                </div>
            </Link>
        </motion.div>
    )
}