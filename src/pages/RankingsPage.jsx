import React, { useState } from "react";
import icon from "../assets/artists-avatars/Animakid.png"

export default function RankingsPage() {
    const [selected, setSelected] = useState("Today")
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
            <div className="px-8 sm:px-32 grid grid-cols-4 text-[#3b3b3b]">
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
                        lg: "All Time"
                    }
                ].map((rank, index) => {
                    return (
                    <button 
                        className={`text-center sm:text-2xl font-semibold ${selected === rank.lg && "text-white"}`} 
                        onClick={() => setSelected(rank.lg)}
                    >
                        <h4 className="hidden md:block py-2">
                            {rank.lg}
                        </h4>
                        <h4 className="block md:hidden py-2">
                            {rank.sm? rank.sm:rank.lg}
                        </h4>
                        {selected === rank.lg && <hr />}
                    </button>)
                })}
            </div>
            <div className="mt-10 px-4 sm:px-32">
                <div className="flex rounded-full px-5 sm:px-12 py-3 border border-[#3B3B3B] font-spaceMono text-[#858584] text-sm md:text-md lg:text-lg">
                    <div className="flex flex-1">
                        <span>#</span>
                        <p className="ml-7">Artist</p>
                    </div>
                    <div className="hidden md:flex flex-1 justify-between lg:pr-20">
                        <p>Change</p>
                        <p>NFTs Sold</p>
                        <p>Volume</p>
                    </div>
                    <p className="block md:hidden">Volume</p>
                </div>
                <div className="mt-5 w-full">
                    <div className="flex rounded-2xl px-2 sm:px-8 py-2.5 border border-[#3B3B3B] bg-[#3B3B3B] font-spaceMono text-[#858584] text-sm md:text-md lg:text-lg">
                        <div className="flex flex-1">
                            <span className="bg-[#2B2B2B] rounded-full px-2.5 my-auto">1</span>
                            <div className="ml-2 sm:ml-7 flex">
                                <img src={icon} className="w-10 md:w-16" />
                                <h4 className="my-auto ml-2 sm:ml-5 text-white text-xs xl:text-xl font-workSans font-medium sm:font-semibold truncate">Jaydon Ekstrom Bothman</h4>
                            </div>
                        </div>
                        <div className="hidden md:flex flex-1 justify-between lg:pr-20 my-auto">
                            <p className="text-[#00AC4F]">+1.41%</p>
                            <p>602</p>
                            <p>12.4 ETH</p>
                        </div>
                        <p className="block md:hidden my-auto text-xs">12.4 ETH</p>
                    </div>
                </div>
            </div>
        </div>
    )
}