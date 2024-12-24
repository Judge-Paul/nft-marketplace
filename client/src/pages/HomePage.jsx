import React, { useMemo } from "react";
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
import ErrorPage from "./ErrorPage";

export default function HomePage() {
	const NFTs = useTokens();
	const Collections = useCollections();

	if (NFTs.isError || Collections.isError) {
		return <ErrorPage />;
	}

	if (NFTs.isPending || Collections.isPending) {
		return <Spinner />;
	}

	return (
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
	);
}
