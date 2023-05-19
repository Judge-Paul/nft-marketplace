import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CategoryCard({backgroundImage, name, icon}) {
    return (
        <Link to="/marketplace">
            <motion.div 
                className={`bg-[#3B3B3B] rounded-3xl bg-[url(${backgroundImage})]`}
                animate={{ scale: 0.99 }}
                whileHover={{ scale: 0.92 }}
            >
                <div>
                    <img src={backgroundImage} className="w-full rounded-t-3xl blur-[15px] p-1" alt={`${name} category background image`} />
                    <div className="absolute inset-0 bottom-[5rem] flex justify-center items-center text-white text-7xl lg:text-8xl">
                        {icon}
                    </div>
                </div>
                <div className="py-6 pl-3 sm:pl-7 text-white text-sm sm:text-2xl font-semibold font-workSans">
                    {name}
                </div>
            </motion.div>
        </Link>
    )
}