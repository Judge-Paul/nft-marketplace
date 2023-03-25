import React from "react";
import { FaSearch } from "react-icons/fa";

export default function MarketplacePage() {
    return (
        <div className="px-8 sm:px-32 text-white mt-20 font-workSans">
            <div>
                <h4 className="text-3xl lg:text-[3.5rem] font-bold">
                    Browse Marketplace
                </h4>
                <p className="text-lg lg:text-[1.55rem] mt-5 font-medium">
                    Browse through more than 50k NFTs on the NFT Marketplace.
                </p>
                <div className="relative mt-7 w-full">
                    <input
                        type="text"
                        className="py-4 px-5 w-full rounded-xl bg-[#2B2B2B] border border-[#3b3b3b] placeholder-[#3b3b3b] focus:outline-none"
                        placeholder="Search your favourite NFTs"
                    />
                    <button className="absolute inset-y-0 right-0 text-white hidden sm:block">
                        <FaSearch className="w-full h-full p-5 " />
                    </button>
                </div>
            </div>
        </div>
    )
}