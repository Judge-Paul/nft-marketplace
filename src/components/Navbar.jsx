import React from "react";
import Logo from "../assets/Logo.png";
import { BiStoreAlt } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="py-6">
      <div className="px-4 lg:px-20">
        <div className="flex justify-between">
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="text-white font-semibold text-xl flex">
                <BiStoreAlt className="text-[#A259FF] mr-4" size="32px" />
                <img src={Logo} alt="NFT Marketplace Logo" className="mt-2" />
            </Link>
          </div>
          <div className="hidden lg:block font-workSans font-bold">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/marketplace">
                <motion.div 
                    className="text-white hover:text-gray-100 pr-10"
                    whileHover={{ scale: 0.92 }}
                  >
                      Marketplace
                </motion.div>    
              </Link>  
              <Link to="/rankings">
                <motion.div 
                    className="text-white hover:text-gray-100 pr-10"
                    whileHover={{ scale: 0.92 }}
                  >
                      Rankings
                </motion.div>
              </Link>
              <Link to="/connnect">
                <motion.div 
                    className="text-white hover:text-gray-100 pr-10"
                    whileHover={{ scale: 0.92 }}
                  >
                      Connect a wallet
                </motion.div>
              </Link>
              <Link to="/register" className="flex">
                <motion.button
                  className="py-4 px-8 text-white flex rounded-2xl bg-[#A259FF]"
                  whileHover={{ scale: 0.92 }}
                >
                    <AiOutlineUser size="22px" className="mr-2" />
                    Sign up
                </motion.button>
              </Link>

            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
