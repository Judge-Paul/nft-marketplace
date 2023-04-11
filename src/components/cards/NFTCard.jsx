import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NFTCard({id, image, title, artist, artistAvatar, price, highestBid, className }) {
    return (
        <Link to={`/nft/${id}`}>
            <motion.div 
                whileHover={{ scale: 0.92 }} 
                className={`rounded-2xl ${className} w-80 mt-7`}
            >
                <img src={image} className="rounded-t-2xl h-80 w-full" />
                <div className="p-7">
                    <h4 className="text-2xl font-medium truncate">{title}</h4>
                    <div className="flex mb-3 mt-1">
                        <Link to="/artist">
                            <img src={artistAvatar} width="40px" className="h-[40px] rounded-full" />
                        </Link>
                        <p className="pl-2 my-auto truncate">{artist}</p>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <h4 className="mb-1 text-xs">Price</h4>
                            <p>{price.toFixed(2)} ETH</p>
                        </div>
                        <div>
                            <h4 className="mb-1 text-xs">Highest Bid</h4>
                            <p>{(Math.random() * price).toFixed(2)} wETH</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    )
}