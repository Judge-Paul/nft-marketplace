import { useQuery } from "@tanstack/react-query";
import { get } from "../libs/api";

const useTokens = () =>
	useQuery({
		queryKey: ["tokens"],
		queryFn: async () => {
			const data = await get(
				"/tokens/v7?limit=150&includeTopBid=true&minFloorAskPrice=0.1&sortBy=updatedAt",
			);
			if (data.data) {
				return data.data.tokens;
			}
			throw new Error("Tokens request failed.");
		},
	});

export default useTokens;
