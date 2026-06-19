import { useQuery } from "@tanstack/react-query";
import { get } from "../libs/api";

const useCollection = (slug) => {
	const { data, isPending, isError } = useQuery({
		queryKey: ["collection", slug],
		queryFn: async () => {
			const res = await get(`/collection/${slug}`);
			if (res.data) {
				return res.data; // { collection, tokens }
			}
			throw new Error("Collection request failed.");
		},
	});

	const collection = data?.collection;
	const tokens = data?.tokens ?? [];

	return {
		data: { collection, tokens },
		isPending,
		isError,
	};
};

export default useCollection;
