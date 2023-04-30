import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiOutlinePlus } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { RxGlobe, RxDiscordLogo, RxTwitterLogo } from "react-icons/rx";
import NFTCard from "../components/cards/NFTCard";
import NFT from "../assets/highlighted-nft.png";
import { useParams } from "react-router-dom";
import { AuthContext } from "../store/AuthContext";
import Spinner from "../components/Spinner";
import { generateNumber, formatNum } from "../libs/Functions";
import { Link } from "react-router-dom";

export default function CollectionPage() {
    const [selected, setSelected] = useState("")
    const [collectionData, setCollectionData] = useState(null)
    const { collectionsData } = useContext(AuthContext)
    const { id } = useParams();
    
    useEffect(()=> {
        setCollectionData(collectionsData?.filter(item => item.id === id))
    }, [id, collectionsData])
    console.log(collectionData)
    return (
        <>
            {collectionData ? collectionData.map(collection => {
            return (
            <div key={collection.id} className="text-white font-workSans">
                {collection.banner && <div className="bg-cover">
                    <img src={collection.banner} className="w-full bg-center h-96" />
                </div>}
                <div className={`px-8 sm:px-32 ${collection.banner ? "" : "mt-20"}`}>
                    <Link to={collection.externalUrl}>
                        <motion.img 
                            whileHover={{ scale: 0.92 }} 
                            src={collection.image} 
                            className="border border-black mx-auto md:mx-0 rounded-3xl relative bottom-[3.5rem] w-28 h-28 cursor-pointer" 
                        />
                    </Link>
                    <div className="block lg:flex justify-between">
                        <h4 className="mt-5 text-3xl lg:text-[3rem] font-bold block truncate">{collection.name}</h4>
                        <div className="sm:flex gap-5">
                            <button className="mt-5 flex justify-center bg-[#A259FF] px-6 py-4 font-bold rounded-2xl w-full">
                                <BiCopy size="20px" className="my-auto mr-3" />
                                {collection.id.slice(0, 6) + '...' + collection.id.slice(-4)}
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
                                <h4 className="font-spaceMono text-[1.5rem] lg:text-[1.9rem] font-black">{formatNum(collection.volume.allTime)}+</h4>
                                <p className="text-[0.9rem] lg:text-[1.2rem]">Total Sales</p>
                            </div>
                            <div className="mr-20">
                                <h4 className="font-spaceMono text-[1.5rem] lg:text-[1.9rem] font-black">{generateNumber(5, 50)}+</h4>
                                <p className="text-[0.9rem] lg:text-[1.2rem]">Nfts Sold</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h4 className="font-spaceMono text-[#858584] text-2xl font-semibold">
                            Bio
                        </h4>
                        <p className="text-2xl font-medium mt-5">
                            {collection.description?collection.description:"Nothing to see here."}
                        </p>
                        <h4 className="font-spaceMono text-[#858584] text-2xl font-semibold mt-10">
                            Links
                        </h4>
                        <div className="flex mt-3 text-[#858584]">
                            <a target="_blank" href={collection.externalUrl}>
                                <RxGlobe size="30px" className="mr-3" />
                            </a>
                            <a target="_blank" href={collection.discordUrl}>
                                <RxDiscordLogo size="30px" className="mr-3" /> 
                            </a>
                            <a target="_blank" href={collection.twitterUsername?`https://www.twitter.com/${collection.twitterUsername}`: null}>
                                <RxTwitterLogo size="30px" className="mr-3" /> 
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
                            ].map((category, index) => {
                                return (
                                <button 
                                    key={index}
                                    className="text-center sm:text-xl font-semibold" onClick={() => setSelected(category.name)}>
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
            </div>)
            })
            : 
            <Spinner />}
        </>
    )
}