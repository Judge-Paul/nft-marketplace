import React from "react";
import NFT from "../assets/highlighted-nft.png"
import Animakid from "../assets/artists-avatars/Animakid.png"
import { motion } from "framer-motion";
import { Link } from "react-router-dom"
import TrendingCard from "./cards/TrendingCard";

export default function Trending() {
    return (
        <div className="mt-20 mb-20 font-workSans px-8 sm:px-32 text-white">
            <h4 className="text-3xl md:text-[2.5rem] font-bold">
                Trending Collection
            </h4>
            <p className="text-lg sm:text-[1.35rem] mt-5 font-medium mb-20">
                Checkout Our Weekly Updated Trending Collection.
            </p>
            <div className="flex justify-center gap-7 place-center">
                <TrendingCard img1={NFT} img2={NFT} img3={NFT} total={"1025+"} artist={"MrFox"} avatar={Animakid} title={"Dsgn Animals"} />
                <TrendingCard img1={NFT} img2={NFT} img3={NFT} total={"1025+"} artist={"MrFox"} avatar={Animakid} title={"Dsgn Animals"} className={"hidden lg:block"} />
                <TrendingCard img1={NFT} img2={NFT} img3={NFT} total={"1025+"} artist={"MrFox"} avatar={Animakid} title={"Dsgn Animals"} className={"hidden xl:block"} />
            </div>
        </div>
    )
}