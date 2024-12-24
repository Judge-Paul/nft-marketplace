import { useQuery } from "@tanstack/react-query";
import { get } from "../libs/api";

const useTokens = () =>
	useQuery({
		queryKey: ["tokens"],
		queryFn: async () => {
			const data = await get("/tokens");
			if (data.data) {
				return data.data;
			}
			throw new Error("Tokens request failed.");
		},
	});

export default useTokens;
