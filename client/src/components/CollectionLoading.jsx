import Loader from "./Loader";

export default function CollectionLoading() {
	return (
		<div className="text-white font-workSans">
			<Loader className="bg-cover w-full h-96 bg-center" />
			<div className="max-w-7xl mx-auto px-8 sm:px-32 2xl:px-0">
				<Loader className="border border-black mx-auto md:mx-0 rounded-3xl relative bottom-[3.5rem] w-28 h-28 cursor-pointer" />
				<div className="block lg:flex justify-between">
					<Loader className="mt-5 py-6 w-full lg:w-max sm:px-60 rounded-2xl" />
					<div className="sm:flex gap-5">
						<Loader className="mt-5 px-20 py-6 font-bold rounded-2xl w-full" />
						<Loader className="mt-5 px-16 py-6 font-bold rounded-2xl w-full" />
					</div>
				</div>
				<div className="mt-10">
					<div className="flex place-items-center md:place-items-left">
						<div className="mr-20">
							<Loader className="py-4 w-24 rounded-2xl" />
							<Loader className="mt-2 py-2.5 w-40 rounded-2xl" />
						</div>
						<div className="mr-20">
							<Loader className="py-4 w-24 rounded-2xl" />
							<Loader className="mt-2 py-2.5 w-40 rounded-2xl" />
						</div>
					</div>
				</div>
				<div className="mt-10">
					<Loader className="py-3 w-16 rounded-2xl" />
					<div className="mt-6 space-y-2.5">
						<Loader className="py-2.5 w-full rounded-2xl" />
						<Loader className="py-2.5 w-full rounded-2xl" />
						<Loader className="py-2.5 w-full rounded-2xl" />
						<Loader className="py-2.5 w-full rounded-2xl" />
						<Loader className="py-2.5 w-full rounded-2xl" />
					</div>
					<Loader className="text-xl md:text-2xl font-medium mt-0.5" />
				</div>
				<div className="mt-12">
					<Loader className="py-3 w-16 rounded-2xl" />
					<div className="flex mt-3 mb-8 text-[#858584]">
						<Loader className="w-10 h-10 rounded-2xl mr-5" />
						<Loader className="w-10 h-10 rounded-2xl mr-5" />
						<Loader className="w-10 h-10 rounded-2xl mr-5" />
					</div>
				</div>
			</div>
		</div>
	);
}
