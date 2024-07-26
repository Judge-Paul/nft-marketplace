import { useQuery } from "@tanstack/react-query";
import { get } from "../libs/api";

const useTokens = () =>
	useQuery({
		queryKey: ["tokens"],
		queryFn: async () => {
			const data = await get(
				"/tokens/v7?contract=0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb&contract=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d&sortBy=updatedAt&limit=200&contract=0x60e4d786628fea6478f785a6d7e704777c86a7c6&contract=0x7bd29408f11d2bfc23c34f18275bbf23bb716bc7&contract=0x81ae0be3a8044772d04f32398bac1e1b4b215aa8&contract=0xb7f7f6c52f2e2fdb1963eab30438024864c313f6&contract=0xbd3531da5cf5857e7cfaa92426877b022e612cf8&contract=0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a&contract=0xe785e82358879f061bc3dcac6f0444462d4b5330&contract=0xff9c1b15b16263c61d017ee9f65c50e4ae0113d7",
			);
			if (data.data) {
				return data.data.tokens;
			}
			throw new Error("Collections request failed.");
		},
	});

export default useTokens;
