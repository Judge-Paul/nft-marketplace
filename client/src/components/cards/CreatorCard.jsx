import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatNum } from "../../libs/Functions";

export default function CreatorCard({ slug, position, avatar, name, sales }) {
  return (
    <motion.div
      whileHover={{ scale: 0.92 }}
      className="bg-[#3B3B3B] px-3 py-5 rounded-2xl flex xl:block xl:w-full"
    >
      <Link to={`/collection/${slug}`}>
        <div className="mx-auto xl:mb-5 flex xl:pr-7 xl:justify-center static w-72 xl:w-max">
          <h4 className="text-white text-xs bg-[#2B2B2B] rounded-full absolute xl:static xl:h-full px-2 xl:px-3 xl:py-1 font-spaceMono">
            {position}
          </h4>
          <img
            src={avatar}
            className="rounded-full w-14 h-14 xl:w-40 xl:h-40"
            alt={`${name} icon`}
          />
          <div className="block w-full xl:hidden pl-5">
            <h4 className="font-semibold text-sm w-48 truncate">{name}</h4>
            <p className="text-[#2B2B2B] font-semibold text-sm pt-2">
              Total Sales:{" "}
              <span className="text-white">{formatNum(sales)} ETH</span>
            </p>
          </div>
        </div>
        <div className="hidden xl:block text-center">
          <h4 className="hidden xl:block font-semibold text-xl truncate">
            {name}
          </h4>
          <p className="text-[#2B2B2B] font-semibold text-md pt-2">
            Total Sales:{" "}
            <span className="text-white text-md">{formatNum(sales)} ETH</span>
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
