import React from "react";
import { Link } from "react-router-dom";
import Astronaut from "../assets/subscribe-bg.webp";

export default function ErrorPage() {
	return (
		<div className="min-h-screen flex justify-center object-center max-w-7xl 2xl:mx-auto xl:mx-36">
			<div className="mb-20 px-8 sm:px-20 lg:px-0 lg:w-1/2 text-white font-workSans">
				<img src={Astronaut} className="lg: mx-auto" />
				<h4 className="mt-8 text-xl lg:text-[2.5rem] text-center font-bold">
					Uh-oh! Something&apos;s Not Right.
				</h4>
				<p className="mt-4 text-md lg:text-lg text-center">
					It seems like there's an issue getting the NFTs data. Don't worry,
					this might just be a temporary glitch. Here's what you can do:
				</p>
				<ul className="mt-6 text-md lg:text-lg list-disc list-inside">
					<li>Check your internet connection for stability.</li>
					<li>Refresh the page and try again.</li>
					<li>Visit us again later—we'll have it fixed in no time.</li>
				</ul>
				<p className="mt-6 text-md lg:text-lg text-left">
					If this persists, feel free to report to{" "}
					<Link
						href="https://x.com/jadge_dev"
						className="underline text-blue-400"
					>
						Paul
					</Link>{" "}
					on Twitter.
				</p>
			</div>
		</div>
	);
}
