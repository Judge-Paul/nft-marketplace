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
  const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  };
  const queries = [
    {
      queryKey: ["NFTs"],
      queryFn: () => fetchData("https://nft-market.onrender.com/tokens"),
    },
    {
      queryKey: ["collections"],
      queryFn: () => fetchData("https://nft-market.onrender.com/collections"),
    },
    {
      queryKey: ["rankingsOneDay"],
      queryFn: () =>
        fetchData("https://nft-market.onrender.com/rankings/oneDay"),
    },
    {
      queryKey: ["rankingsSevenDays"],
      queryFn: () =>
        fetchData("https://nft-market.onrender.com/rankings/sevenDays"),
    },
    {
      queryKey: ["rankingsThirtyDays"],
      queryFn: () =>
        fetchData("https://nft-market.onrender.com/rankings/thirtyDays"),
    },
  ];

  const queryResults = useQueries({ queries: queries });

  if (queryResults.some((result) => result.isLoading)) {
    return <Spinner />;
  }

  if (queryResults.some((result) => result.isError)) {
    return <p>Error fetching data</p>;
  }

  console.log(queryResults);
  const NFTsData = queryResults[0].data;
  const collectionsData = queryResults[1].data.collections;
  const rankingsOneDay = queryResults[2].data.collections;
  const rankingsSevenDays = queryResults[3].data.collections;
  const rankingsThirtyDays = queryResults[4].data.collections;

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
