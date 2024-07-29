import React, { useState, useContext } from "react";
import RankingsCard from "../components/cards/RankingsCard";
import useCollections from "../hooks/useCollections";
import Spinner from "../components/Spinner";

export default function RankingsPage() {
	const [selected, setSelected] = useState("Today");
	const oneDay = useCollections("1DayVolume");
	const sevenDays = useCollections("7DayVolume");
	const thirtyDays = useCollections("30DayVolume");
	const allTime = useCollections();

	if (
		oneDay.isLoading ||
		sevenDays.isLoading ||
		thirtyDays.isLoading ||
		allTime.isLoading
	) {
		return <Spinner />;
	}

	if (
		oneDay.isError ||
		sevenDays.isError ||
		thirtyDays.isError ||
		allTime.isError
	) {
		throw new Error("Failed to fetch rankings data.");
	}

	const rankingsOneDay = oneDay.data;
	const rankingsSevenDays = sevenDays.data;
	const rankingsThirtyDays = thirtyDays.data;
	const rankingsAllTime = allTime.data;

	return (
		<div className="font-workSans max-w-7xl mx-auto text-white mt-10 lg:mt-20">
			<div className="px-8 sm:px-32 2xl:px-0 mb-10 lg:mb-20">
				<h4 className="text-3xl lg:text-[3.5rem] font-bold">Top Creators</h4>
				<p className="text-lg lg:text-[1.55rem] mt-5 lg:mt-10 font-medium">
					Check out top ranking NFT collections on the Collectiverse.
				</p>
			</div>
			<div className="px-8 sm:px-32 2xl:px-0 grid grid-cols-4 text-[#3b3b3b]">
				{[
					{
						lg: "Today",
						sm: "1d",
					},
					{
						lg: "This Week",
						sm: "7d",
					},
					{
						lg: "This Month",
						sm: "30d",
					},
					{
						lg: "All Time",
					},
				].map((rank, index) => {
					return (
						<button
							key={rank.lg}
							className={`text-center sm:text-2xl font-semibold ${
								selected === rank.lg && "text-white"
							}`}
							onClick={() => setSelected(rank.lg)}
						>
							<h4 className="hidden md:block py-2">{rank.lg}</h4>
							<h4 className="block md:hidden py-2">
								{rank.sm ? rank.sm : rank.lg}
							</h4>
							{selected === rank.lg && <hr />}
						</button>
					);
				})}
			</div>
			<div className="mt-10 px-4 sm:px-32 2xl:px-0">
				<div className="flex rounded-full px-5 sm:px-12 py-3 border border-[#3B3B3B] font-spaceMono text-[#858584] text-sm md:text-md lg:text-lg">
					<div className="flex flex-1">
						<span>#</span>
						<p className="ml-7">Artist</p>
					</div>
					<div className="hidden md:flex flex-1 justify-between lg:pr-20">
						<p>Change</p>
						<p>Floor Price</p>
						<p>Volume</p>
					</div>
					<p className="block md:hidden">Volume</p>
				</div>
				<div className="mt-5 mb-10 w-full">
					{selected === "Today" &&
						rankingsOneDay.map((collection, index) => {
							return (
								<RankingsCard
									key={collection.id}
									id={collection.id}
									slug={collection.slug}
									position={index + 1}
									artist={collection.name}
									icon={
										collection.image
											? collection.image
											: collection.sampleImages[0]
									}
									sales={
										collection.floorAsk.price
											? collection.floorAsk.price.amount.decimal
											: (Math.random() * 20).toFixed(2)
									}
									volume={collection.volume["1day"]}
									change={collection.volumeChange["1day"]}
								/>
							);
						})}
					{selected === "This Week" &&
						rankingsSevenDays.map((collection, index) => {
							return (
								<RankingsCard
									key={collection.id}
									id={collection.id}
									slug={collection.slug}
									position={index + 1}
									artist={collection.name}
									icon={
										collection.image
											? collection.image
											: collection.sampleImages[0]
									}
									sales={Math.floor(Math.random() * 999) + 1}
									volume={collection.volume["7day"]}
									change={collection.volumeChange["7day"]}
								/>
							);
						})}
					{selected === "This Month" &&
						rankingsThirtyDays.map((collection, index) => {
							return (
								<RankingsCard
									key={collection.id}
									id={collection.id}
									slug={collection.slug}
									position={index + 1}
									artist={collection.name}
									icon={
										collection.image
											? collection.image
											: collection.sampleImages[0]
									}
									sales={Math.floor(Math.random() * 999) + 1}
									volume={collection.volume["30day"]}
									change={collection.volumeChange["30day"]}
								/>
							);
						})}
					{selected === "All Time" &&
						rankingsAllTime.map((collection, index) => {
							return (
								<RankingsCard
									key={collection.id}
									id={collection.id}
									slug={collection.slug}
									position={index + 1}
									artist={collection.name}
									icon={
										collection.image
											? collection.image
											: collection.sampleImages[0]
									}
									sales={Math.floor(Math.random() * 999) + 1}
									volume={collection.volume["allTime"]}
									change={collection.volumeChange["30day"]}
								/>
							);
						})}
				</div>
			</div>
		</div>
	);
}
