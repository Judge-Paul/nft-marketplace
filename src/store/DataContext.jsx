import { createContext } from "react";
import { useQueries } from "@tanstack/react-query";
import Spinner from "../components/Spinner";

export const DataContext = createContext({
	NFTsData: [],
	collectionsData: [],
	rankingsOneDay: [],
	rankingsSevenDays: [],
	rankingsThirtyDays: [],
});

export default function DataProvider({ children }) {
	// const fetchData = async (path) => {
	// 	const baseURL = import.meta.env.VITE_BASE_URL;
	// 	const response = await fetch(`${baseURL}+hello/${path}`);
	// 	if (!response.ok) {
	// 		throw new Error("Failed to fetch data");
	// 	}
	// 	return response.json();
	// };
	// const queries = [
	// 	{
	// 		queryKey: ["NFTs"],
	// 		queryFn: () => fetchData("/tokens"),
	// 	},
	// 	{
	// 		queryKey: ["collections"],
	// 		queryFn: () => fetchData("/collections"),
	// 	},
	// 	{
	// 		queryKey: ["rankingsOneDay"],
	// 		queryFn: () => fetchData("/rankings/oneDay"),
	// 	},
	// 	{
	// 		queryKey: ["rankingsSevenDays"],
	// 		queryFn: () => fetchData("/rankings/sevenDays"),
	// 	},
	// 	{
	// 		queryKey: ["rankingsThirtyDays"],
	// 		queryFn: () => fetchData("/rankings/thirtyDays"),
	// 	},
	// ];

	// const queryResults = useQueries({ queries: queries });

	// if (queryResults.some((result) => result.isLoading)) {
	// 	return <Spinner />;
	// }

	// if (queryResults.some((result) => result.isError)) {
	// 	return (
	// 		<div className="flex h-screen bg-[#2B2B2B] justify-center items-center">
	// 			<p className="text-white font-bold text-3xl">Error fetching data...</p>
	// 		</div>
	// 	);
	// }

	// const NFTsData = queryResults[0].data;
	// const collectionsData = queryResults[1].data.collections;
	// const rankingsOneDay = queryResults[2].data.collections;
	// const rankingsSevenDays = queryResults[3].data.collections;
	// const rankingsThirtyDays = queryResults[4].data.collections;
	const NFTsData = [];
	const collectionsData = [];
	const rankingsOneDay = [];
	const rankingsSevenDays = [];
	const rankingsThirtyDays = [];

	return (
		<DataContext.Provider
			value={{
				NFTsData,
				collectionsData,
				rankingsOneDay,
				rankingsSevenDays,
				rankingsThirtyDays,
			}}
		>
			{children}
		</DataContext.Provider>
	);
}
