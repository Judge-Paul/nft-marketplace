import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { BiStoreAlt } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className="py-6">
        <div className="px-2 sm:px-6 xl:px-20">
          <div className="flex justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white font-semibold text-xl flex">
                  <BiStoreAlt className="text-[#A259FF] mr-1 sm:mr-4" size="32px" />
                  <img src={Logo} alt="NFT Marketplace Logo" className="mt-2" />
              </Link>
            </div>
            <div className="hidden md:block font-workSans font-bold">
              <div className="lg:ml-10 flex items-center space-x-4 md:text-sm lg:text-lg">
                <Link to="/marketplace">
                  <motion.div 
                      className="text-white hover:text-gray-100 pr-1 lg:pr-5 xl:pr-10"
                      whileHover={{ scale: 0.92 }}
                    >
                        Marketplace
                  </motion.div>    
                </Link>  
                <Link to="/rankings">
                  <motion.div 
                      className="text-white hover:text-gray-100 pr-1 lg:pr-5 xl:pr-10"
                      whileHover={{ scale: 0.92 }}
                    >
                        Rankings
                  </motion.div>
                </Link>
                <Link to="/connect">
                  <motion.div 
                      className="text-white hover:text-gray-100 pr-1 lg:pr-5 xl:pr-10"
                      whileHover={{ scale: 0.92 }}
                    >
                        Connect a wallet
                  </motion.div>
                </Link>
                <Link to="/register" className="flex">
                  <motion.button
                    className="md:py-3 md:px-5 lg:py-4 lg:px-8 text-white text-sm flex rounded-2xl bg-[#A259FF]"
                    whileHover={{ scale: 0.92 }}
                  >
                      <AiOutlineUser size="22px" className="mr-2" />
                      Sign up
                  </motion.button>
                </Link>

              </div>
            </div>
            <button onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)} className="block md:hidden">
              Hello
            </button>
          </div> 
        </div>
      </nav>
  );
}

export default Navbar;
