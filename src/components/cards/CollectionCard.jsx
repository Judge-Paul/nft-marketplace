import React from "react";
import { Link } from "react-router-dom"
import { motion } from "framer-motion";

export default function CollectionCard({id, img1, img2, img3, total, artist, title, avatar, className}) {
    return (
        <div className={`mb-4 w-[20rem] mt-10 xl:mt-20 ${className}`}>
            <Link to={`/collection/${id}`}><motion.img whileHover={{ scale: 0.92 }} src={img1? img1:avatar} alt="Sample Image" className="w-80 h-80 rounded-2xl" /></Link>
            <div className="grid grid-cols-3 gap-3 mt-4 mb-3">
                <motion.div whileHover={{ scale: 0.92 }}>
                    <Link to={`/collection/${id}`}>
                        <img src={img2? img2:img1? img1:avatar} alt="Sample Image 2" className="rounded-2xl h-24 w-full" />
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 0.92 }}>
                    <Link to={`/collection/${id}`}>
                        <img src={img3? img3:img2? img2:img1? img1:avatar} alt="Sample Image 3" className="rounded-2xl h-24 w-full" />
                    </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 0.92 }} className="bg-[#A259FF] h-24 rounded-2xl flex justify-center items-center">
                    <Link to={`/collection/${id}`}>
                        <h4 className="font-spaceMono text-xl sm:text-2xl font-semibold">{total}+</h4>
                    </Link>
                </motion.div>
            </div>
            <h4 className="text-2xl font-bold truncate">{title}</h4>
            <div className="flex mt-2">
                <Link to ={`/collection/${id}`}>
                    <motion.div whileHover={{ scale: 0.92 }}> 
                        <img src={avatar} width="30px" className="rounded-full" />
                    </motion.div>
                </Link>
                <p className="pl-4 text-lg font-medium">{artist}</p>
            </div>
        </div>
    )
}