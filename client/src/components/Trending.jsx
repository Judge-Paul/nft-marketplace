import React from "react";
import CollectionCard from "./cards/CollectionCard";
import useCollections from "../hooks/useCollections";

export default function Trending() {
	const { data } = useCollections();
	return (
		<div className="mt-20 mb-20 lg:mb-36 font-workSans px-8 sm:px-32 max-w-7xl mx-auto 2xl:px-0 text-white">
			<h4 className="text-2xl sm:text-3xl md:text-[2.5rem] font-bold">
				Trending Collection
			</h4>
			<p className="text-md sm:text-lg sm:text-[1.35rem] mt-5 font-medium">
				Checkout Our Weekly Updated Trending Collection.
			</p>
			<div className="flex flex-wrap justify-center gap-7 place-center">
				{data.map((collection, index) => {
					if (index < 3) {
						let className;
						index === 2 ? (className = "md:hidden xl:block") : "";
						return (
							<CollectionCard
								key={collection.id}
								id={collection.slug}
								img1={collection.sampleImages[0]}
								img2={collection.sampleImages[1]}
								img3={collection.sampleImages[2]}
								total={collection.onSaleCount}
								artist={collection.slug}
								title={collection.name}
								avatar={collection.image}
								className={className}
							/>
						);
					}
				})}
			</div>
		</div>
	);
}
