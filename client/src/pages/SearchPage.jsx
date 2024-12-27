import { Navigate, useSearchParams } from "react-router-dom";

export default function SearchPage() {
	const [searchParams] = useSearchParams();

	const query = searchParams.get("q");

	if (!query) {
		return <Navigate to="/marketplace" replace />;
	}

	return (
		<div className="text-white mt-10 lg:mt-20 font-workSans">
			<div className="px-8 sm:px-32 mb-10 lg:mb-20 mx-auto max-w-[84rem]">
				<h4 className="text-3xl lg:text-[3.5rem] font-bold">
					Results for "{query}"
				</h4>
			</div>
		</div>
	);
}
