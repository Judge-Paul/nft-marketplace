import React from "react";
import { motion } from "framer-motion";
import { AiOutlineMail } from "react-icons/ai";
import Astronaut from "../assets/subscribe-bg.png"

export default function Subscribe() {
    return (
        <div className="grid md:grid-cols-2 gap-x-10 bg-[#3B3B3B] rounded-3xl mx-8 lg:mx-20 xl:mx-32 mt-10 mb-20 p-6 lg:p-16">
            <img src={Astronaut} />
            <div className="my-auto pt-5 md:pt-0">
                <h4 className="text-2xl lg:text-5xl mb-6 text-white font-bold font-workSans">Join Our Weekly Digest</h4>
                <p className="text-[#CCCCCC] font-workSans sm:w-72">Get exclusive promotions & updates straight to your inbox.</p>
                <div className="relative mt-6">
                    <input
                        type="text"
                        className="py-4 px-5 md:pr-40 lg:pr-48 xl:pr-56 w-full rounded-[20px] font-workSans outline-none"
                        placeholder="Enter your email here"
                    />
                    <motion.button 
                        className="hidden sm:flex absolute inset-y-0 right-0 px-12 md:px-6 lg:px-8 xl:px-14 py-2 bg-[#A259FF] font-bold text-white rounded-[20px]"
                        whileHover={{ scale: 0.95 }}
                    >
                        <AiOutlineMail size="20px" className="mr-3 my-auto" />
                        <span className="my-auto">Subscribe</span>
                    </motion.button>
                    <motion.button 
                        className="flex mt-4 sm:hidden justify-center py-4 w-full bg-[#A259FF] font-bold text-white rounded-[20px]"
                        whileHover={{ scale: 0.95 }}
                    >
                        <AiOutlineMail size="20px" className="mr-3" />
                        Subscribe
                    </motion.button>
                </div>
            </div>
        </div>
    )
}