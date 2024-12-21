import { useQuery } from "@tanstack/react-query";
import { get } from "../libs/api";

const useCollections = (sortBy = "allTimeVolume") =>
	useQuery({
		queryKey: ["collections", sortBy],
		queryFn: async () => {
			const data = await get(`/collections/v7?sortBy=${sortBy}`);
			if (data.data) {
				return data.data.collections;
			}
			throw new Error("Collections request failed.");
		},
	});

export default useCollections;
