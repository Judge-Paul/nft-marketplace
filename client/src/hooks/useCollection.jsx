import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const useCollection = (slug) => {
	const queries = useQueries({
		queries: [
			{
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
			},
			{
				queryKey: ["tokens", slug],
				queryFn: async () => {
					const data = await axios.get(
						`https://api.reservoir.tools/tokens/v7?id=${slug}`,
					);
					if (data.data) {
						return data.data;
					}
					throw new Error("Tokens from collection request failed.");
				},
			},
		],
	});

	const isPending = queries.some((query) => query.isPending);
	const isError = queries.some((query) => query.isError);
	const data = isError ? null : queries.map((query) => query.data);

	return { data, isPending, isError };
};

export default useCollection;
