import React from "react";
import { motion } from "framer-motion";
import { SlRocket } from "react-icons/sl";
import Animakid from "../assets/artists-avatars/Animakid.png"
import CreatorCard from "./cards/CreatorCard";

export default function Creators() {
    return (
        <div className="mt-20 mb-20 lg:mb-36 font-workSans text-white">
            <div className="flex justify-between px-8 sm:px-32">
                <div>
                    <h4 className="text-3xl lg:text-[2.5rem] font-bold">
                        Top Creators
                    </h4>
                    <p className="text-lg lg:text-[1.35rem] mt-5 font-medium">
                        Checkout Top Rated Creators On the NFT Marketplace
                    </p>
                </div>
                <motion.button
                    className="hidden md:flex bg-transparent border-2 border-[#A259FF] text-xs xl:text-lg ml-auto h-full px-14 py-4 rounded-2xl font-semibold"
                    whileHover={{ scale: 0.92 }}
                >
                    <SlRocket className="mr-2 lg:text-lg text-[#A259FF]" size="20px" />
                    View Rankings
                </motion.button>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-7 mt-20 place-items-center lg:px-32">
                <CreatorCard position={1} avatar={Animakid} name={"Animakid"} sales={34.53} />
                <CreatorCard position={2} avatar={Animakid} name={"Animakid"} sales={34.53} />
                <CreatorCard position={3} avatar={Animakid} name={"Animakid"} sales={34.53} />
                <CreatorCard position={4} avatar={Animakid} name={"Animakid"} sales={34.53} />
                <CreatorCard position={5} avatar={Animakid} name={"Animakid"} sales={34.53} />
                <CreatorCard position={6} avatar={Animakid} name={"Animakid"} sales={34.53} />
                <CreatorCard position={7} avatar={Animakid} name={"Animakid"} sales={34.53} />
                <CreatorCard position={8} avatar={Animakid} name={"Animakid"} sales={34.53} />
                <CreatorCard position={9} avatar={Animakid} name={"Animakid"} sales={34.53} />
                <CreatorCard position={10} avatar={Animakid} name={"Animakid"} sales={34.53} />
                <CreatorCard position={11} avatar={Animakid} name={"Animakid"} sales={34.53} />
                <CreatorCard position={12} avatar={Animakid} name={"Animakid"} sales={34.53} />
                <motion.button
                    className="flex md:hidden bg-transparent border-2 border-[#A259FF] justify-center py-4 w-80 rounded-2xl font-semibold"
                    whileHover={{ scale: 0.92 }}
                >
                    <SlRocket className="mr-2 text-lg text-[#A259FF]" />
                    View Rankings
                </motion.button>
            </div>
        </div>
    )
}