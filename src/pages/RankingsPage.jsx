import React, { useState } from "react";
import icon from "../assets/artists-avatars/Animakid.png"
import RankingsCard from "../components/cards/RankingsCard";

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
                <div className="mt-5 mb-10 w-full">
                    <RankingsCard position={1} icon={icon} artist="Jaydon Ekstrom Bothman" change={1.41} sales={602} volume={12.4} />
                    <RankingsCard position={2} icon={icon} artist="Jaydon Ekstrom Bothman" change={1.41} sales={602} volume={12.4} />
                    <RankingsCard position={3} icon={icon} artist="Jaydon Ekstrom Bothman" change={1.41} sales={602} volume={12.4} />
                    <RankingsCard position={4} icon={icon} artist="Jaydon Ekstrom Bothman" change={1.41} sales={602} volume={12.4} />
                    <RankingsCard position={5} icon={icon} artist="Jaydon Ekstrom Bothman" change={1.41} sales={602} volume={12.4} />
                    <RankingsCard position={6} icon={icon} artist="Jaydon Ekstrom Bothman" change={1.41} sales={602} volume={12.4} />
                    <RankingsCard position={7} icon={icon} artist="Jaydon Ekstrom Bothman" change={1.41} sales={602} volume={12.4} />
                </div>
            </div>
        </div>
    )
}