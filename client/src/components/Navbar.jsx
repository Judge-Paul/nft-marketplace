import React, { useContext, useState } from "react";
import Logo from "../assets/Logo.png";
import { BiStoreAlt } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MenuButton } from "../assets/MenuButton";
import { AuthContext } from "../store/AuthContext";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { MdKeyboardArrowDown } from "react-icons/md";

function Navbar() {
	const { user, logout } = useContext(AuthContext);
	const [isOpen, setIsOpen] = useState(false);
	const [showDropdown, setShowDropdown] = useState(false);
	return (
		<>
			<nav className="hidden md:block">
				<div className="px-2 py-4 sm:px-6 xl:px-20 2xl:px-0 mx-auto max-w-7xl">
					<div className="flex justify-between">
						<div className="flex-shrink-0 flex items-center">
							<Link
								to="/"
								className="text-white font-semibold text-xl flex items-center"
							>
								<BiStoreAlt className="text-[#A259FF]" size="34px" />
								<h4 className="pl-3 text-[22px] text-white font-bold font-spaceMono">
									Collectiverse
								</h4>
							</Link>
						</div>
						<div className="hidden md:block my-auto font-workSans font-bold">
							<div className="lg:ml-10 flex items-center space-x-4 md:text-sm lg:text-lg">
								<Link to="/marketplace">
									<motion.div
										className="text-white hover:text-gray-100 pr-1 lg:pr-5 xl:pr-10"
										whileHover={{ scale: 0.92 }}
									>
										Marketplace
									</motion.div>
								</Link>
								<Link to="/rankings">
									<motion.div
										className="text-white hover:text-gray-100 pr-1 lg:pr-5 xl:pr-10"
										whileHover={{ scale: 0.92 }}
									>
										Rankings
									</motion.div>
								</Link>
								<Link to="/connect">
									<motion.div
										className="text-white hover:text-gray-100 pr-1 lg:pr-5 xl:pr-10"
										whileHover={{ scale: 0.92 }}
									>
										Connect a wallet
									</motion.div>
								</Link>
							</div>
						</div>
						<div className="hidden md:block font-workSans">
							{user ? (
								<div
									className="relative"
									onMouseEnter={() => setShowDropdown(true)}
									onMouseLeave={() => setShowDropdown(false)}
								>
									<motion.div className="flex text-white bg-[#A259FF] rounded-2xl p-2">
										<HiOutlineUserCircle size="30px" />
										<MdKeyboardArrowDown className="mt-auto" size="25px" />
									</motion.div>
									{showDropdown && (
										<div className="absolute z-10 right-0 rounded-md shadow-lg p-2.5 bg-[#A259FF] w-28">
											<button
												onClick={logout}
												className="w-full text-center text-white font-semibold hover:text-gray-200"
											>
												Sign Out
											</button>
										</div>
									)}
								</div>
							) : (
								<Link to="/register" className="flex">
									<motion.button
										className="md:py-3 md:px-5 lg:py-4 lg:px-8 text-white text-sm flex rounded-2xl bg-[#A259FF]"
										whileHover={{ scale: 0.92 }}
									>
										<AiOutlineUser size="22px" className="mr-2" />
										Sign up
									</motion.button>
								</Link>
							)}
						</div>
					</div>
				</div>
			</nav>
			<nav className="block md:hidden sticky inset-0 z-50">
				<div
					className={`flex-shrink-0 flex items-center px-4 justify-between bg-[#2B2B2B] py-6 ${
						!isOpen && "bg-opacity-50"
					}`}
				>
					<Link to="/" className="text-white font-semibold text-xl flex">
						<BiStoreAlt className="text-[#A259FF] mr-1 sm:mr-4" size="32px" />
						<h4 className="pl-1.5 text-[22px] text-white font-bold font-spaceMono">
							Collectiverse
						</h4>
					</Link>
					<button
						onClick={() => setIsOpen((prevIsOpen) => !prevIsOpen)}
						className="block md:hidden"
					>
						<MenuButton
							isOpen={isOpen}
							color="#ffffff"
							transition={{ duration: 0.5 }}
						/>
					</button>
				</div>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, transform: "translateY(-100%)" }}
						animate={{ opacity: 1, transform: "translateY(0)" }}
						transition={{ duration: 0.5 }}
						className="text-center fixed inset-x-0 top-14 z-50 bg-[#2B2B2B]"
					>
						<Link to="/marketplace">
							<motion.h4
								className="w-full text-white font-semibold text-2xl mt-10"
								onClick={() => setIsOpen(false)}
								whileHover={{ scale: 0.92 }}
							>
								Marketplace
							</motion.h4>
						</Link>
						<Link to="/rankings">
							<motion.h4
								className="w-full text-white font-semibold text-2xl mt-10"
								onClick={() => setIsOpen(false)}
								whileHover={{ scale: 0.92 }}
							>
								Rankings
							</motion.h4>
						</Link>
						<Link to="/connect">
							<motion.h4
								className="w-full text-white font-semibold text-2xl mt-10"
								onClick={() => setIsOpen(false)}
								whileHover={{ scale: 0.92 }}
							>
								Connect a wallet
							</motion.h4>
						</Link>
						{user ? (
							<motion.h4
								className="w-full bg-[#A259FF] mx-auto py-2 px-7 rounded-2xl text-white font-semibold text-2xl mt-10 cursor-pointer mb-7"
								onClick={() => {
									logout();
									setIsOpen(false);
								}}
								whileHover={{ scale: 0.92 }}
							>
								Sign Out
							</motion.h4>
						) : (
							<Link to="/register">
								<button
									className="flex mx-auto rounded-2xl bg-[#A259FF] py-4 px-8 mb-10 text-white mt-10 text-2xl font-semibold"
									onClick={() => setIsOpen(false)}
								>
									<AiOutlineUser size="30px" className="mr-2" />
									Sign up
								</button>
							</Link>
						)}
					</motion.div>
				)}
			</nav>
		</>
	);
}

export default Navbar;
