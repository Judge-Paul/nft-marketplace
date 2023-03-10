import React from "react";
import Logo from "../assets/Logo.png";
import { BiStoreAlt } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import { motion } from "framer-motion";


function Navbar() {
  return (
    <nav className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex-shrink-0 flex items-center">
            <a className="text-white font-bold text-xl flex">
                <BiStoreAlt className="text-[#A259FF] mr-4" size="32px" />
                <img src={Logo} alt="NFT Marketplace Logo" className="mt-2" />
            </a>
          </div>
          <div className="hidden lg:block font-roboto">
            <div className="ml-10 flex items-center space-x-4">
                <motion.a 
                    className="text-white hover:text-gray-200 pr-10"
                    whileHover={{ scale: 0.92 }}
                >
                    Marketplace
              </motion.a>
              <motion.a 
                    className="text-white hover:text-gray-200 pr-10"
                    whileHover={{ scale: 0.92 }}
                >
                    Rankings
              </motion.a>
              <motion.a 
                    className="text-white hover:text-gray-200 pr-10"
                    whileHover={{ scale: 0.92 }}
                >
                    Connect a wallet
              </motion.a>
              <motion.button
                    className="py-4 px-8 text-white flex rounded-2xl bg-[#A259FF]"
                    whileHover={{ scale: 0.92 }}
              >
                    <AiOutlineUser size="22px" className="mr-2" />
                    Sign up
              </motion.button>
              <button >
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
