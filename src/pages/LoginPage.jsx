import React from "react";
import BG from "../assets/connect-bg.png"
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi"
import { HiOutlineUser } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="block md:flex">
            <img src={BG} className="w-full md:w-[50vw]" />
            <div className="text-white font-workSans my-auto p-6 md:p-14 pt-10 md:pt-0 pb-10 md:pb-0">
                <h4 className="text-3xl lg:text-[3.2rem] font-semibold md:pb-5">
                    Log in to Account
                </h4>
                <p className="text-lg lg:text-[1.35rem] mt-5 font-medium xl:w-2/3">
                    Welcome back <span className="invisible">your details and start creating, collecting and selling NFTs.</span>
                </p>
                <form>
                    <div className="relative mt-4xl:mt-8">
                        <input
                            type="text"
                            placeholder="Username or email"
                            className="pl-14 py-3 text-md text-black font-medium w-full lg:w-2/3 xl:w-2/4 rounded-full focus:border-blue-300"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                            <HiOutlineUser className="w-5 h-5 text-gray-400"  />
                        </div>
                    </div>
                    <div className="relative mt-4 xl:mt-8">
                        <input
                            type="text"
                            placeholder="Password"
                            className="pl-14 py-3 text-md text-black font-medium w-full lg:w-2/3 xl:w-2/4 rounded-full focus-none"
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                            <HiOutlineLockClosed className="w-5 h-5 text-gray-400"  />
                        </div>
                    </div>
                    <motion.button 
                        className="mt-7 xl:mt-10 bg-[#A259FF] py-3 w-full lg:w-2/3 xl:w-2/4 rounded-full font-medium"
                        whileHover={{ scale: 0.95 }}    
                    > 
                        Log in to Account
                    </motion.button>
                    <Link to="/register">
                        <motion.h4
                            className="w-full lg:w-2/3 xl:w-2/4 block text-center mt-7 hover:text-purple-400"
                            whileHover={{ scale: 0.95 }}
                        >
                            Don't have an account?
                        </motion.h4>
                    </Link>
                </form>
            </div>
        </div>
    )
}