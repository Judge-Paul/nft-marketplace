import React from "react";
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

export default function CollectionCard({img1, img2, img3, total, artist, title, avatar, className}) {
    return (
        <div className={`mb-4 w-[20rem] mt-10 xl:mt-20 ${className}`}>
            <Link to="/nft"><motion.img whileHover={{ scale: 0.92 }} src={img1} alt="Sample Image" className="w-80 h-80 rounded-2xl" /></Link>
            <div className="grid grid-cols-3 gap-3 mt-4 mb-3">
                <motion.div whileHover={{ scale: 0.92 }}>
                    <Link to="/nft">
                        <img src={img2} alt="Sample Image 2" className="rounded-2xl h-24 w-full" />
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 0.92 }}>
                    <Link to="/nft">
                        <img src={img3} alt="Sample Image 3" className="rounded-2xl h-24 w-full" />
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 0.92 }} className="bg-[#A259FF] h-24 rounded-2xl flex justify-center items-center">
                    <Link to="/nft">
                        <h4 className="font-spaceMono text-xl sm:text-2xl font-semibold">{total}+</h4>
                    </Link>
                </motion.div>
            </div>
            <h4 className="text-2xl font-bold truncate">{title}</h4>
            <div className="flex mt-2">
                <Link to ="/artist">
                    <motion.div whileHover={{ scale: 0.92 }}> 
                        <img src={avatar} width="30px" className="rounded-full" />
                    </motion.div>
                </Link>
                <p className="pl-4 text-lg font-medium">{artist}</p>
            </div>
        </div>
    )
}