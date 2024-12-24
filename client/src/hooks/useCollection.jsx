import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useCollection = (slug) =>
	useQuery({
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

export default useCollection;
