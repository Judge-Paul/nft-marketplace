import React, { useEffect, useState } from "react";
import BG from "../assets/artist-bg.png"
import Avatar from "../assets/artists-avatars/animakid-square.png"
import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { RxGlobe, RxDiscordLogo, RxTwitterLogo, RxInstagramLogo } from "react-icons/rx";
import { AiOutlineYoutube } from "react-icons/ai";
import NFTCard from "../components/cards/NFTCard";
import icon from "../assets/artists-avatars/Animakid.png";
import NFT from "../assets/highlighted-nft.png";
import { useParams } from "react-router-dom";

export default function CollectionPage() {
    const [selected, setSelected] = useState("")
    const [collectionData, setCollectionData] = useState(null)
    const { id } = useParams();
    useEffect(() => {
        console.log(1)
        async function fetchData() {
            try {
                const response = await fetch('https://nft-market.onrender.com/collection', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id: id })
                });
                const data = await response.json();
                console.log(data)
                setCollectionData(data.collections)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [id])
    console.log(collectionData)
    return (
        <div className="text-white font-workSans">
            <div className="bg-artistBg lg:h-88">
                <img src={BG} className="w-full" />
            </div>
            <div className="px-8 sm:px-32">
                <motion.img whileHover={{ scale: 0.92 }} src={Avatar} className="border border-black mx-auto md:mx-0 rounded-3xl relative bottom-[3.5rem] w-28 cursor-pointer" />
                <div className="block lg:flex justify-between">
                    <h4 className="mt-5 text-3xl lg:text-[3rem] font-bold block">Animakid</h4>
                    <div className="sm:flex gap-5">
                        <button className="mt-5 flex justify-center bg-[#A259FF] px-6 py-4 font-bold rounded-2xl w-full">
                            <BiCopy size="20px" className="my-auto mr-3" />
                            0xc0E3...B79C
                        </button>
                        <button className="mt-5 flex justify-center border-2 border-[#A259FF] px-7 py-4 font-bold rounded-2xl w-full">
                            <AiOutlinePlus size="22px" className="my-auto mr-2 text-[#A259FF]" />
                            Follow
                        </button>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="flex place-items-center md:place-items-left">
                    <div className="mr-20">
                        <h4 className="font-spaceMono text-[1.5rem] lg:text-[1.9rem] font-black">250k+</h4>
                        <p className="text-[0.9rem] lg:text-[1.2rem]">Total Sale</p>
                    </div>
                    <div className="mr-20">
                        <h4 className="font-spaceMono text-[1.5rem] lg:text-[1.9rem] font-black">50+</h4>
                        <p className="text-[0.9rem] lg:text-[1.2rem]">Nfts Sold</p>
                    </div>
                    <div>
                        <h4 className="font-spaceMono text-[1.5rem] lg:text-[1.9rem] font-black">240k+</h4>
                        <p className="text-[0.9rem] lg:text-[1.2rem]">Followers</p>
                    </div>
                    </div>
                </div>
                <div className="mt-10">
                    <h4 className="font-spaceMono text-[#858584] text-2xl font-semibold">
                        Bio
                    </h4>
                    <p className="text-2xl font-medium mt-5">
                        The Internet's Friendliest Designer Kid.
                    </p>
                    <h4 className="font-spaceMono text-[#858584] text-2xl font-semibold mt-10">
                        Links
                    </h4>
                    <div className="flex mt-3 text-[#858584]">
                        <a href="www.google.com">
                            <RxGlobe size="30px" className="mr-3" />
                        </a>
                        <a href="https://www.discord.com">
                            <RxDiscordLogo size="30px" className="mr-3" /> 
                        </a>
                        <a href="https://www.youtube.com">
                            <AiOutlineYoutube size="30px" className="mr-3" />
                        </a>
                        <a href="https://www.twitter.com/paulogebe">
                            <RxTwitterLogo size="30px" className="mr-3" /> 
                        </a>
                        <a href="https://www.instagram.com/paulogebe">
                            <RxInstagramLogo size="30px" />
                        </a>
                    </div>
                    <div className="mt-10 grid grid-cols-3">
                        {[
                            {
                                name: "Created",
                                amount: 302,
                            },
                            {
                                name: "Owned",
                                amount: 67
                            },
                            {
                                name: "Collection",
                                amount: 4
                            }
                        ].map(category => {
                            return (
                            <button className="text-center sm:text-xl font-semibold" onClick={() => setSelected(category.name)}>
                                <h4 className="py-4">
                                    {category.name}
                                    <span className="hidden md:inline font-spaceMono ml-3 p-2 px-3 rounded-full bg-[#858584] text-xs sm:text-lg">
                                        {category.amount}
                                    </span>
                                </h4>
                                {selected === category.name && <hr />}
                            </button>
                            )
                        })}
                    </div>
                    <div className="bg-[#3B3B3B] -mx-8 sm:-mx-32 grid md:grid-cols-2 xl:grid-cols-3 justify-items-center px-8 lg:px-32 pt-12 pb-10 border-b-[2px] border-black">
                        <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                        <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                        <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                        <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                        <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                        <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
                    </div>
                </div>
            </div>
        </div>
    )
}