import React from "react";
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

export default function TrendingCard({img1, img2, img3, total, artist, title, avatar, className}) {
    return (
        <div className={`mb-4 w-[20rem] ${className}`}>
            <Link to="/nft"><motion.img whileHover={{ scale: 0.92 }} src={img1} alt="" className="w-full" /></Link>
            <div className="grid grid-cols-3 gap-3 mt-4 mb-3">
                <motion.div whileHover={{ scale: 0.92 }}>
                    <Link to="/nft">
                        <img src={img2} alt="Others" className="rounded-2xl" />
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 0.92 }}>
                    <Link to="/nft">
                        <img src={img3} alt="Others" className="rounded-2xl" />
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 0.92 }} className="bg-[#A259FF] rounded-2xl flex justify-center items-center">
                    <Link to="/nft">
                        <h4 className="font-spaceMono text-2xl font-semibold">{total}</h4>
                    </Link>
                </motion.div>
            </div>
            <h4 className="text-2xl font-bold">{title}</h4>
            <div className="flex mt-2">
                <Link to ="/artist">
                    <motion.div whileHover={{ scale: 0.92 }}> 
                        <img src={avatar} width="25px" />
                    </motion.div>
                </Link>
                <p className="pl-4 text-lg font-medium">{artist}</p>
            </div>
        </div>
    )
}