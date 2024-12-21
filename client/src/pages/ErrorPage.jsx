import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ErrorPage() {
	return (
		<div className="min-h-screen flex flex-col justify-center items-center px-8 sm:px-6 lg:px-8">
			<div className="max-w-4xl 2xl:max-w-7xl text-center">
				<h2 className="text-4xl 2xl:text-5xl font-extrabold text-white">
					Error with Page
				</h2>
				<p className="mt-4 text-lg xl:text-2xl text-gray-200 text-justify">
					Sorry, there's an error with this page or loading its content. This is
					most likely due to a failed request or a broken link. Please check
					your network and try again.
				</p>
				<div className="mt-10">
					<p className="text-lg xl:text-4xl font-bold text-gray-200 mb-2">
						What can you do?
					</p>
					<ul className="text-justify xl:text-xl text-white">
						<li className="mb-2">
							<span className="text-[#A259FF] font-medium">
								Check your network
							</span>{" "}
							- Ensure you are able to load other websites and maybe other pages
							on this site.
						</li>
						<li className="mb-2">
							<span className="text-[#A259FF] font-medium">Conact us</span> - if
							you are certain this is an unhandled exception you can reach out
							to us.
						</li>
					</ul>
				</div>
			</div>
			<div className="mt-10 sm:flex sm:justify-center w-full">
				<Link to="/">
					<motion.div
						whileHover={{ scale: 0.92 }}
						className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl text-white bg-[#A259FF] hover:bg-purple-600 md:py-4 md:text-lg md:px-10"
					>
						Go back to homepage
					</motion.div>
				</Link>
				<Link taret="_blank" to="https://x.com/jadge_dev">
					<motion.div
						whileHover={{ scale: 0.92 }}
						className="mt-3 sm:mt-0 sm:ml-3"
					>
						<p className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-2xl text-[#A259FF] bg-gray-200 hover:bg-gray-300 md:py-4 md:text-lg md:px-10">
							Contact us
						</p>
					</motion.div>
				</Link>
			</div>
		</div>
	);
}
