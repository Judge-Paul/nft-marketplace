import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function RankingsPage() {
    const [selected, setSelected] = useState("today")
    return (
        <div className="font-workSans text-white mt-10 lg:mt-20">
            <div className="px-8 sm:px-32 mb-10 lg:mb-20">
                <h4 className="text-3xl lg:text-[3.5rem] font-bold">
                    Top Creators
                </h4>
                <p className="text-lg lg:text-[1.55rem] mt-5 lg:mt-10 font-medium">
                    Check out top ranking NFT artists on the NFT Marketplace.
                </p>
            </div>
            <div className="px-8 xl:px-32 grid grid-cols-4 text-[#3b3b3b]">
                {[
                    {
                        lg: "Today",
                        sm: "1d"
                    },
                    {
                        lg: "This Week",
                        sm: "7d"
                    },
                    {
                        lg: "This Month",
                        sm: "30d"
                    },
                    {
                        lg: "All Time",
                        sm: "All Time"
                    }
                ].map((rank, index) => {
                    return (
                    <button 
                        className={`text-center sm:text-2xl font-semibold ${selected === rank.lg && "text-white"}`} 
                        onClick={() => setSelected(rank.lg)}
                    >
                        <h4 className="hidden md:block py-6">
                            {rank.lg}
                        </h4>
                        <h4 className="block md:hidden py-6">
                            {rank.sm}
                        </h4>
                        {selected === rank.lg && <hr />}
                    </button>)
                })}
            </div>
        </div>
    )
}