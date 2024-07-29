import Banner from "../assets/404-banner.webp";
import Profile from "../assets/404-profile.webp";
import { motion } from "framer-motion";

export default function NotFound() {
	return (
		<div className="text-white font-workSans">
			<div
				className="bg-cover h-96 bg-center"
				style={{ backgroundImage: `url(${Banner})` }}
			></div>
			<div className="max-w-7xl mx-auto px-8 sm:px-32 2xl:px-0">
				<motion.img
					whileHover={{ scale: 0.92 }}
					src={Profile}
					className="border border-black mx-auto md:mx-0 rounded-3xl relative bottom-[3.5rem] w-28 h-28 cursor-pointer"
				/>
				<div className="block lg:flex justify-between">
					<h4 className="mt-5 text-3xl lg:text-[3rem] font-bold block truncate">
						Collection Not Found
					</h4>
				</div>
				<div className="my-14">
					<p className="text-xl md:text-2xl font-medium mt-5">
						Oops! It looks like the NFT collection you're trying to view cannot
						be found. This might be due to the following reasons:
					</p>
					<ul className="list-disc list-inside mt-4">
						<li>
							<strong>Incorrect URL:</strong> The slug in the URL might be
							misspelled or outdated. Please double-check the URL to ensure it
							matches the correct slug for the collection you’re looking for.
						</li>
						<li>
							<strong>Collection Not Found:</strong> The collection associated
							with this slug may have been removed or does not exist in our
							marketplace. If you followed a link from another site or email,
							the collection might have been moved or deleted.
						</li>
						<li>
							<strong>Permissions Issue:</strong> If the collection is private
							or restricted, you might not have the necessary permissions to
							view it. Ensure you are logged in with the correct account or have
							the appropriate access rights.
						</li>
						<li>
							<strong>Technical Issues:</strong> There could be a temporary
							technical issue preventing the collection from being displayed.
							Try refreshing the page or checking back later to see if the issue
							resolves itself.
						</li>
					</ul>
					<p className="mt-6">
						If you believe this collection should be available or need further
						assistance, please reach out to our support team. They will help you
						resolve the issue and find the collection you're looking for.
					</p>
					<p className="mt-4">In the meantime, you might want to:</p>
					<ul className="list-disc list-inside mt-4">
						<li>
							<a href="/" className="text-blue-500 hover:underline">
								Return to the Homepage
							</a>{" "}
							to explore other NFT collections and marketplace features.
						</li>
						{/* <li>
							Use our{" "}
							<a href="/search" className="text-blue-500 hover:underline">
								search feature
							</a>{" "}
							to find other collections or NFTs that might interest you.
						</li> */}
						<li>
							If you came from an external link, it might be outdated. Try
							finding the collection through our main site or contact the source
							of the link for an update.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
