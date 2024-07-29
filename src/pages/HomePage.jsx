import React, { useContext } from "react";
import Category from "../components/Category";
import Creators from "../components/Creators";
import Discover from "../components/Discover";
import Highlighted from "../components/Highlighted";
import Home from "../components/Home";
import HowItWorks from "../components/HowItWorks";
import Subscribe from "../components/Subscribe";
import Trending from "../components/Trending";
import Spinner from "../components/Spinner";
import useTokens from "../hooks/useTokens";
import useCollections from "../hooks/useCollections";

export default function HomePage() {
	const NFTs = useTokens();
	const Collections = useCollections();

	if (NFTs.isError || Collections.isError) {
		throw new Error("Failed to fetch tokens data.");
	}

	return (
		<>
			{NFTs.isLoading || Collections.isLoading ? (
				<Spinner />
			) : (
				<>
					<Home />
					<Trending />
					<Creators />
					<Category />
					<Discover />
					<Highlighted />
					<HowItWorks />
					<Subscribe />
				</>
			)}
		</>
	);
}
