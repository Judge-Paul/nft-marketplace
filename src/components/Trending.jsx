import React from "react";
import NFT from "../assets/highlighted-nft.png"
import Animakid from "../assets/artists-avatars/Animakid.png"
import { motion } from "framer-motion";

export default function Trending() {
    return (
        <div className="mt-20 font-workSans px-32 text-white">
            <h4 className="text-3xl md:text-[2.5rem] font-bold">
                Trending Collection
            </h4>
            <p className="text-lg sm:text-[1.35rem] mt-5 font-medium mb-20">
                Checkout Our Weekly Updated Trending Collection.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3">
                <div className="mb-4">
                    <img src={NFT} alt="" />
                    <div className="grid grid-cols-3 gap-3 mt-4 mb-3">
                        <img src={NFT} alt="Others" className="rounded-2xl" />
                        <img src={NFT} alt="" className="rounded-2xl" />
                        <div className="bg-[#A259FF] rounded-2xl flex justify-center items-center">
                            <h4 className="font-spaceMono text-2xl font-semibold">1025+</h4>
                        </div>
                    </div>
                    <h4 className="text-2xl font-medium">Dsgn Animals</h4>
                    <div className="flex mt-2">
                        <img src={Animakid} width="25px" />
                        <p className="pl-4 text-lg font-medium">MrFox</p>
                    </div>
                </div>
            </div>
        </div>
    )
}