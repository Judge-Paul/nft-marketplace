import { useQuery } from "@tanstack/react-query";
import { get } from "../libs/api";

const useCollection = (slug) =>
	useQuery({
		queryKey: ["collection", slug],
		queryFn: async () => {
			const data = await get(`/collections/v6?slug=${slug}`);
			if (data.data) {
				return data.data.collections;
			}
			throw new Error("Collection request failed.");
		},
	});

export default useCollection;
