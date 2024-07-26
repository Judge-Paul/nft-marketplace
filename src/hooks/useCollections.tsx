import { useQuery } from "@tanstack/react-query";
import { get } from "../libs/api";

const useCollections = () =>
	useQuery({
		queryKey: ["collections"],
		queryFn: async () => {
			const data = await get("/collections/v7");
			if (data.data) {
				return data.data.collections;
			}
			throw new Error("Collections request failed.");
		},
	});

export default useCollections;
