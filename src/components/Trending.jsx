import React from "react";
import NFT from "../assets/highlighted-nft.png"
import Animakid from "../assets/artists-avatars/Animakid.png"
import CollectionCard from "./cards/CollectionCard";

export default function Trending() {
    return (
        <div className="mt-20 mb-20 lg:mb-36 font-workSans px-8 sm:px-32 text-white">
            <h4 className="text-3xl md:text-[2.5rem] font-bold">
                Trending Collection
            </h4>
            <p className="text-lg sm:text-[1.35rem] mt-5 font-medium mb-20">
                Checkout Our Weekly Updated Trending Collection.
            </p>
            <div className="flex justify-center gap-7 place-center">
                <CollectionCard img1={NFT} img2={NFT} img3={NFT} total={"1025+"} artist={"MrFox"} avatar={Animakid} title={"Dsgn Animals"} />
                <CollectionCard img1={NFT} img2={NFT} img3={NFT} total={"1025+"} artist={"MrFox"} avatar={Animakid} title={"Dsgn Animals"} className={"hidden lg:block"} />
                <CollectionCard img1={NFT} img2={NFT} img3={NFT} total={"1025+"} artist={"MrFox"} avatar={Animakid} title={"Dsgn Animals"} className={"hidden xl:block"} />
            </div>
        </div>
    )
}