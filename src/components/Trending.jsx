import React, { useState, useEffect } from "react";
import CollectionCard from "./cards/CollectionCard";

export default function Trending() {
    const [collectionsData, setCollectionsData] = useState([])
    useEffect(() => {
        fetch('https://nft-market.onrender.com/collections')
            .then(response => response.json())
            .then(data => setCollectionsData(data.collections))
            .catch(error => console.error(error));
    },[])
    
    return (
        <div className="mt-20 mb-20 lg:mb-36 font-workSans px-8 sm:px-32 text-white">
            <h4 className="text-3xl md:text-[2.5rem] font-bold">
                Trending Collection
            </h4>
            <p className="text-lg sm:text-[1.35rem] mt-5 font-medium">
                Checkout Our Weekly Updated Trending Collection.
            </p>
            <div className="flex flex-wrap justify-center gap-7 place-center">
                {collectionsData.map((collection, index) => {
                    if (index < 3) {
                        let className
                        index === 2 ? className="md:hidden xl:block" : ""
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
                                className={className}
                            />)
                    }
                })}
            </div>
        </div>
    )
}