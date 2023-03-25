import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import NFTCard from "../components/cards/NFTCard";
import icon from "../assets/artists-avatars/Animakid.png";
import NFT from "../assets/highlighted-nft.png";

export default function MarketplacePage() {
    const [selected, setSelected] = useState("")
    return (
        <div className="text-white mt-10 lg:mt-20 font-workSans">
            <div className="px-8 sm:px-32 mb-10 lg:mb-20">
                <h4 className="text-3xl lg:text-[3.5rem] font-bold">
                    Browse Marketplace
                </h4>
                <p className="text-lg lg:text-[1.55rem] mt-5 lg:mt-10 font-medium">
                    Browse through more than 50k NFTs on the NFT Marketplace.
                </p>
                <div className="relative mt-7 w-full">
                    <input
                        type="text"
                        className="py-4 px-5 w-full rounded-2xl bg-[#2B2B2B] border border-[#3b3b3b] placeholder-[#3b3b3b] focus:outline-none"
                        placeholder="Search your favourite NFTs"
                    />
                    <button className="absolute inset-y-0 right-0 text-white">
                        <FaSearch className="w-full h-full p-5 " />
                    </button>
                </div>
            </div>
            <hr />
            <div className="px-8 sm:px-32 grid grid-cols-2">
                <button className="text-center sm:text-2xl font-semibold" onClick={() => setSelected("nfts")}>
                    <h4 className="py-6">
                        NFTs 
                        <span className="font-spaceMono ml-3 p-2 px-3 rounded-full bg-[#858584] text-xs sm:text-lg">
                            302
                        </span>
                    </h4>
                    {selected === "nfts" && <hr />}
                </button>
                <button className="text-center sm:text-2xl font-semibold" onClick={() => setSelected("collections")}>
                    <h4 className="py-6">
                        Collections 
                        <span className="font-spaceMono ml-3 p-2 px-3 rounded-full bg-[#858584] text-xs sm:text-lg">
                            67
                        </span>
                    </h4>
                    {selected === "collections" && <hr />}
                </button>
            </div>
            <div className="bg-[#3B3B3B] px-8 lg:px-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
            </div>
        </div>
    )
}