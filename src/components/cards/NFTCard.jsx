import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NFTCard({image, title, artist, artistAvatar, price, highestBid, className }) {
    return (
        <Link to="/marketplace">
            <motion.div 
                whileHover={{ scale: 0.92 }} 
                className={`bg-[#3B3B3B] rounded-2xl ${className} w-80 mt-7`}
            >
                <img src={image} />
                <div className="p-7">
                    <h4 className="text-2xl font-medium">{title}</h4>
                    <div className="flex mb-3 mt-1">
                        <img src={artistAvatar} width="40px" />
                        <p className="pl-2 my-auto">{artist}</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h4 className="mb-1 text-xs">Price</h4>
                            <p>{price} ETH</p>
                        </div>
                        <div>
                            <h4 className="mb-1 text-xs">Highest Bid</h4>
                            <p>{highestBid} wETH</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}