import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import NFTCard from "../components/cards/NFTCard";
import CollectionCard from "../components/cards/CollectionCard";
import ReactPaginate from "react-paginate";
import useCollections from "../hooks/useCollections";
import useTokens from "../hooks/useTokens";
import Spinner from "../components/Spinner";
import ErrorPage from "./ErrorPage";
import { useNavigate } from "react-router-dom";

export default function MarketplacePage() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selected, setSelected] = useState("nfts");

	const NFTsData = useTokens();
	const collectionsData = useCollections();

	const [currentPage, setCurrentPage] = useState(0);
	const itemsPerPage = 12;

	const navigate = useNavigate();

	const handlePageChange = (selectedPage) => {
		setCurrentPage(selectedPage.selected);
	};

	if (NFTsData.isPending || collectionsData.isPending) {
		return <Spinner />;
	}

	if (NFTsData.isError || collectionsData.isError) {
		return <ErrorPage />;
	}

	const navigateToSearch = () => {
		navigate(`/search?q=${searchTerm}`);
	};

	const nftsToDisplay = NFTsData.data.slice(
		currentPage * itemsPerPage,
		(currentPage + 1) * itemsPerPage,
	);
	const renderedNFTs = nftsToDisplay.map((nft) => (
		<NFTCard
			key={`${nft.token.collection.id}:${nft.token.tokenId}`}
			id={nft.token.collection.id}
			tokenId={nft.token.tokenId}
			image={nft.token.image}
			title={nft.token.name}
			artist={nft.token.collection.slug}
			artistAvatar={
				nft.token.collection.image
					? nft.token.collection.image
					: nft.token.collection.imageUrl
			}
			className={"bg-[#2B2B2B]"}
			price={nft?.market?.floorAsk?.price?.amount?.decimal}
			highestBid={(Math.random() * 10).toFixed(2)}
		/>
	));

	const collectionsToDisplay = collectionsData.data.slice(
		currentPage * itemsPerPage,
		(currentPage + 1) * itemsPerPage,
	);
	const renderedCollections = collectionsToDisplay.map((collection) => (
		<CollectionCard
			key={collection.id}
			id={collection.slug}
			img1={collection?.sampleImages?.[0]}
			img2={collection?.sampleImages?.[1]}
			img3={collection?.sampleImages?.[2]}
			total={collection.onSaleCount}
			artist={collection.slug}
			title={collection.name}
			avatar={collection.image}
		/>
	));

	return (
		<div className="text-white mt-10 lg:mt-20 font-workSans">
			<div className="px-8 sm:px-32 mb-10 lg:mb-20 mx-auto max-w-[84rem]">
				<h4 className="text-3xl lg:text-[3.5rem] font-bold">
					Browse Marketplace
				</h4>
				<p className="text-lg lg:text-[1.55rem] mt-5 lg:mt-10 font-medium">
					Browse through more than {Math.floor(NFTsData.data.length / 10) * 10}+
					NFTs on the Marketplace and purchase from OpenSea
				</p>
				<div className="relative mt-7 w-full">
					<input
						type="text"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						className="py-4 px-5 w-full rounded-2xl bg-[#2B2B2B] border border-[#3b3b3b] placeholder-[#3b3b3b] focus:outline-none"
						placeholder="Search your favourite NFTs"
						onKeyDown={(e) => e.key === "Enter" && navigateToSearch()}
					/>
					<button
						onClick={navigateToSearch}
						className="absolute inset-y-0 right-0 text-white"
					>
						<FaSearch className="w-full h-full p-5 " />
					</button>
				</div>
			</div>
			<hr />
			<div className="px-8 xl:px-32 grid grid-cols-2 mx-auto max-w-[84rem]">
				<button
					className="text-center sm:text-2xl font-semibold"
					onClick={() => setSelected("nfts")}
				>
					<h4 className="py-6">
						NFTs
						<span className="font-spaceMono ml-3 p-2 px-3 rounded-full bg-[#858584] text-xs sm:text-lg">
							{NFTsData.data.length}
						</span>
					</h4>
					{selected === "nfts" && <hr />}
				</button>
				<button
					className="text-center sm:text-2xl font-semibold"
					onClick={() => setSelected("collections")}
				>
					<h4 className="py-6">
						Collections
						<span className="font-spaceMono ml-3 p-2 px-3 rounded-full bg-[#858584] text-xs sm:text-lg">
							{collectionsData.data.length}
						</span>
					</h4>
					{selected === "collections" && <hr />}
				</button>
			</div>
			<div className="bg-[#3B3B3B]">
				<div className="px-2 lg:px-32 mx-auto max-w-[84rem] grid md:grid-cols-2 xl:grid-cols-3 justify-items-center pb-10">
					{selected === "nfts" ? renderedNFTs : renderedCollections}
				</div>
			</div>
			<ReactPaginate
				previousLabel="<"
				nextLabel=">"
				breakLabel={"..."}
				pageCount={Math.ceil(
					(selected === "nfts"
						? NFTsData.data.length
						: collectionsData.data.length) / itemsPerPage,
				)}
				marginPagesDisplayed={1}
				pageRangeDisplayed={2}
				onPageChange={handlePageChange}
				containerClassName={"flex justify-center bg-[#2B2B2B] py-4"}
				pageClassName={"mx-1 md:mx-3"}
				pageLinkClassName={
					"py-2 px-2 md:px-4 text-white hover:bg-[#3B3B3B] rounded-lg text-sm"
				}
				activeClassName={"bg-[#3B3B3B] text-white rounded-lg"}
				previousClassName={"sm:mx-2"}
				nextClassName={"sm:mx-2"}
				previousLinkClassName={
					"py-2 px-4 text-white hover:bg-[#3B3B3B] rounded-lg text-sm"
				}
				nextLinkClassName={
					"py-2 px-2 md:px-4 text-white hover:bg-[#3B3B3B] rounded-lg text-sm"
				}
				breakClassName={"mx-2"}
				breakLinkClassName={
					"py-2 px-2 md:px-4 text-white hover:bg-[#3B3B3B] rounded-lg text-xs"
				}
			/>
		</div>
	);
}
