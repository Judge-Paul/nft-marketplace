import React from "react";
import { Link } from "react-router-dom"
import { BiStoreAlt } from "react-icons/bi"
import { RxTwitterLogo, RxInstagramLogo, RxDiscordLogo} from "react-icons/rx"
import { AiOutlineYoutube } from "react-icons/ai"
import { motion } from "framer-motion";
import Logo from "../assets/logo.png"

export default function Footer() {
    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-4 bg-[#3B3B3B] py-10 px-44">
            <div className="text-[#CCCCCC] font-workSans text-lg">
                <div className="flex mb-4">
                    <Link to="/" className="text-white font-semibold text-xl flex">
                        <BiStoreAlt className="text-[#A259FF] mr-4" size="30px" />
                        <img src={Logo} alt="NFT Marketplace Logo" className="mt-2" />
                    </Link>
                </div>
                <h4>NFT marketplace UI created with Anima for Figma.</h4>
                <p className="mt-3">Join our community</p>
                <div className="flex mt-3">
                    <RxDiscordLogo size="30px" className="mr-3" /> 
                    <AiOutlineYoutube size="30px" className="mr-3" />
                    <RxTwitterLogo size="30px" className="mr-3" /> 
                    <RxInstagramLogo size="30px" />
                </div>
            </div>
            <div className="ml-24 font-workSans text-[#CCCCCC]">
                <h4 className="mb-5 text-2xl text-white font-bold font-spaceMono">Explore</h4>
                <Link to="/marketplace">
                    <p className="mb-3">Marketplace</p>
                </Link>
                <Link to="/rankings">
                    <p className="mb-3">Rankings</p>
                </Link>
                <Link to="/connect">
                    <p>Connect a wallet</p>
                </Link>  
            </div>
            <div className="ml-20 col-span-2">
                <h4 className="text-xl mb-5 text-white font-bold font-spaceMono">Join Our Weekly Digest</h4>
                <p className="text-[#CCCCCC] font-workSans text-[">Get exclusive promotions & updates straight to your inbox.</p>
                <div className="relative mt-3">
                    <input
                        type="text"
                        className="py-4 px-5 pr-48 w-full rounded-[20px] font-workSans outline-none"
                        placeholder="Enter your email here"
                    />
                    <motion.button 
                        className="absolute inset-y-0 right-0 px-14 py-2 bg-[#A259FF] font-bold text-white rounded-[20px]"
                        whileHover={{ scale: 0.95 }}
                    >
                        Subscribe
                    </motion.button>
                </div>
            </div>
        </div>
    )
}