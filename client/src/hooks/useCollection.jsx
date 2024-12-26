import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCollection = (slug) => {
	const {
		data: collectionsData,
		isPending: collectionsPending,
		isError: collectionsError,
	} = useQuery({
		queryKey: ["collection", slug],
		queryFn: async () => {
			const data = await axios.get(
				`https://api.reservoir.tools/collections/v6?slug=${slug}`,
			);
			if (data.data) {
				return data.data.collections;
			}
			throw new Error("Collection request failed.");
		},
	});

	const collection = collectionsData?.[0];

	const {
		data: tokensData,
		isPending: tokensPending,
		isError: tokensError,
	} = useQuery({
		queryKey: ["tokens", slug],
		queryFn: async () => {
			const data = await axios.get(
				`https://api.reservoir.tools/tokens/v7?collection=${collection.id}`,
			);
			if (data.data) {
				return data.data;
			}
			throw new Error("Tokens from collection request failed.");
		},
		enabled: !!collection?.id,
	});

	const tokens = tokensData?.tokens;

	const isPending = collectionsPending || tokensPending;
	const isError = collectionsError || tokensError;
	const data = { collection, tokens };

	return { data, isPending, isError };
};

export default useCollection;
