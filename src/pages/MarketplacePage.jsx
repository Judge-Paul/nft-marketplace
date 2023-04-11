import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import NFTCard from "../components/cards/NFTCard";
import icon from "../assets/artists-avatars/Animakid.png";
import NFT from "../assets/highlighted-nft.png";
import CollectionCard from "../components/cards/CollectionCard";

export default function MarketplacePage() {
    const [NFTsData, setNFTsData] = useState([])
    const [collectionsData, setCollectionsData] = useState([])
    const [selected, setSelected] = useState("nfts")
    useEffect(() => {
        fetch('http://localhost:3000/tokens')
            .then(response => response.json())
            .then(data => setNFTsData(data.tokens))
            .catch(error => console.error(error))
        fetch('http://localhost:3000/collections')
            .then(response => response.json())
            .then(data => setCollectionsData(data.collections))
            .catch(error => console.error(error));
    },[])
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
            <div className="px-8 xl:px-32 grid grid-cols-2">
                <button className="text-center sm:text-2xl font-semibold" onClick={() => setSelected("nfts")}>
                    <h4 className="py-6">
                        NFTs 
                        <span className="font-spaceMono ml-3 p-2 px-3 rounded-full bg-[#858584] text-xs sm:text-lg">
                            {NFTsData.length}
                        </span>
                    </h4>
                    {selected === "nfts" && <hr />}
                </button>
                <button className="text-center sm:text-2xl font-semibold" onClick={() => setSelected("collections")}>
                    <h4 className="py-6">
                        Collections 
                        <span className="font-spaceMono ml-3 p-2 px-3 rounded-full bg-[#858584] text-xs sm:text-lg">
                            {collectionsData.length}
                        </span>
                    </h4>
                    {selected === "collections" && <hr />}
                </button>
            </div>
            <div className="bg-[#3B3B3B] px-8 lg:px-32 grid md:grid-cols-2 xl:grid-cols-3 justify-items-center pb-10">
                    {selected === "nfts" && NFTsData.length === 0 ?
                        (<div className="col-span-3 mt-5">
                            Getting NFt Tokens failed try reloading the site.
                        </div>) : 
                        selected === "nfts" && 
                    NFTsData.map(nft => {
                        return (
                            <NFTCard 
                                key={nft.token.tokenId}
                                id={`${nft.token.collection.id}:${nft.token.tokenId}`}
                                image={nft.token.image}
                                title={nft.token.name}
                                artist={nft.token.collection.slug}
                                artistAvatar={nft.token.collection.image?nft.token.collection.image:nft.token.collection.imageUrl}
                                className={"bg-[#2B2B2B]"}
                                price={nft.market.floorAsk.price.amount.decimal}
                                highestBid={(Math.random() * 10).toFixed(2)}
                        />)
                    })}
                    {collectionsData.length === 0 ?
                    (<div className="col-span-3 mt-5">
                        Getting NFt Collections failed try reloading the site.
                    </div>) : 
                    selected === "collections" && collectionsData.map(collection => {
                        return (
                            <CollectionCard 
                                key={collection.id}
                                id={collection.id}
                                img1={collection.sampleImages[0]}
                                img2={collection.sampleImages[1]}
                                img3={collection.sampleImages[2]}
                                total={collection.onSaleCount}
                                artist={collection.slug}
                                title={collection.name}
                                avatar={collection.image}
                            />)
                    })}
                {/* <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} />
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
                <NFTCard title="Distant Galaxy" artist="MoonDancer" artistAvatar={icon} price={1.63} highestBid={0.33} image={NFT} className={"bg-[#2B2B2B]"} /> */}
            </div>
            <hr />
            <hr />
        </div>
    )
}