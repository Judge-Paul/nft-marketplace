import React from "react";
import { motion } from "framer-motion";

export default function HowItWorksCard({icon, title, description}) {
    return (
        <motion.div 
            className="flex md:block bg-[#3B3B3B] p-2 sm:p-5 rounded-2xl mt-5 cursor-pointer"
            whileHover={{ scale: 0.92 }}
        >
            <img src={icon} className="hidden md:block mx-auto" />
            <img src={icon} width="100px" className="flex md:hidden" />
            <div className="md:text-center text-white my-auto md:h-[8.5rem] lg:h-40">
                <h4 className="text-md md:text-xl lg:text-2xl font-medium md:mb-3">{title}</h4>
                <p className="text-xs sm:text-sm md:text-md lg:text-lg font-light">{description}</p>
            </div>
        </motion.div>
    )
}