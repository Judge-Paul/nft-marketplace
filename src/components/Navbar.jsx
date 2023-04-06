import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { BiStoreAlt } from "react-icons/bi"
import { AiOutlineUser } from "react-icons/ai"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MenuButton } from "../assets/MenuButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className="hidden md:block">
        <marquee className="py-4 text-white border-b border-t border-gray-500">This site is a sample site. Real NFTs can't be bought or sold here. Real Creators can't sell NFTs here. And the NFT data is gotten from Rarible's api.</marquee>
        <div className="px-2 sm:px-6 xl:px-20">
          <div className="flex justify-between">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-white font-semibold text-xl flex">
                  <BiStoreAlt className="text-[#A259FF] mr-1 sm:mr-4" size="32px" />
                  <img src={Logo} alt="NFT Marketplace Logo" className="mt-2" onClick={() => {setIsOpen(false)}} />
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
          </div> 
        </div>
      </nav>
      <nav className="block md:hidden sticky inset-0 z-50" >
        <div className={`flex-shrink-0 flex items-center px-4 justify-between bg-[#2B2B2B] py-6 ${!isOpen && "bg-opacity-50"}`}>
          <Link to="/" className="text-white font-semibold text-xl flex">
              <BiStoreAlt className="text-[#A259FF] mr-1 sm:mr-4" size="32px" />
              <img src={Logo} alt="NFT Marketplace Logo" className="mt-2" onClick={() => {setIsOpen(false)}} />
          </Link>
          <button onClick={() => setIsOpen(prevIsOpen => !prevIsOpen)} className="block md:hidden">
            <MenuButton isOpen={isOpen} color="#ffffff" transition={{ duration: 0.5 }} />
          </button>
        </div>
        {isOpen && <motion.div 
          initial={{ opacity: 0, transform: 'translateY(-100%)' }}
          animate={{ opacity: 1, transform: 'translateY(0)' }}
          transition={{ duration: 0.5 }}
          className="text-center fixed inset-x-0 top-14 z-50 bg-[#2B2B2B]"
        >
          <Link to="/marketplace">
            <motion.h4 
              className="w-full text-white font-semibold text-2xl mt-10" onClick={() => setIsOpen(false)}>
              Marketplace 
            </motion.h4>
          </Link>
          <Link to="/rankings">
            <motion.h4 className="w-full text-white font-semibold text-2xl mt-10" onClick={() => setIsOpen(false)}>
              Rankings
            </motion.h4>
          </Link>
          <Link to="/connect">
            <motion.h4 className="w-full text-white font-semibold text-2xl mt-10" onClick={() => setIsOpen(false)}>
              Connect a wallet
            </motion.h4>
          </Link>
          <Link to="/register">
            <button 
              className="flex mx-auto flex rounded-2xl bg-[#A259FF] py-4 px-8 mb-10 text-white mt-10 text-2xl font-semibold"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineUser size="30px" className="mr-2" />
              Sign up
            </button>
          </Link>
        </motion.div>}
      </nav>
    </>
  );
}

export default Navbar;
