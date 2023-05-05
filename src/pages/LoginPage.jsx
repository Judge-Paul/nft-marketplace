import React, { useContext, useState } from "react";
import BG from "../assets/connect-bg.png"
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner8 } from "react-icons/im";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase"
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth"
import { toast } from "react-toastify";
import { AuthContext } from "../store/AuthContext";

export default function LoginPage() {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [isLoading, setIsLoading] = useState(false)
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        setIsLoading(true)
        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredentials) => {
                toast.success("Logged in successfully", {
                    position: "top-right",
                    autoClose: 1000,
                    theme: "dark",
                })
                setIsLoading(false)
            }).catch((error) => {
                toast.error(`${error}`, {
                    position: "top-right",
                    autoClose: 1000,
                    theme: "dark",
                })
                setIsLoading(false)
            })
    }
    if (user) {
        navigate("/")
    }
    const handleLoginWithGoogle = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            const { user } = result
            toast.success(`Signed in as ${user.displayName}!`, {
              position: "top-right",
              autoClose: 1000,
              theme: "dark",
            })
          })
          .catch((error) => {
            console.log(error)
            toast.error(`${error.message}`, {
              position: "top-right",
              autoClose: 1000,
              theme: "dark",
            })
          })
    }
    return (
        <div className="block md:flex">
            <img src={BG} className="w-full md:w-[50vw]" />
            <div className="text-white font-workSans my-auto p-6 md:p-14 pt-10 md:pt-0 pb-10 md:pb-0">
                <h4 className="text-3xl lg:text-[3.2rem] font-semibold md:pb-5">
                    Log in to Account
                </h4>
                <p className="text-lg lg:text-[1.35rem] mt-5 font-medium xl:w-2/3">
                    Welcome back <span className="invisible">your details and start creating, collecting and selling NFTs.</span>
                </p>
                <form onSubmit={handleSubmit}>
                    <div className="relative mt-4xl:mt-8">
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            className="pl-14 py-3 text-md text-black font-medium w-full lg:w-2/3 xl:w-2/4 rounded-full focus:border-blue-300"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                            <HiOutlineMail className="w-5 h-5 text-gray-400"  />
                        </div>
                    </div>
                    <div className="relative mt-4 xl:mt-8">
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="pl-14 py-3 text-md text-black font-medium w-full lg:w-2/3 xl:w-2/4 rounded-full focus-none"
                            value={formData.password}
                            onChange={handleInputChange}
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                            <HiOutlineLockClosed className="w-5 h-5 text-gray-400"  />
                        </div>
                    </div>
                    <motion.button 
                        disabled={isLoading ? true : false}
                        type="submit"
                        className={`flex mt-7 justify-center xl:mt-10 py-3 w-full lg:w-2/3 xl:w-2/4 rounded-full font-medium ${isLoading ? "bg-[#A259FF80] cursor-not-allowed" : "bg-[#A259FF]"}`}
                        whileHover={{ scale: 0.95 }}    
                    > 
                        Log in to Account
                        {isLoading && <ImSpinner8 className="animate-spin ml-2 my-auto" />}
                    </motion.button>
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                        onClick={handleLoginWithGoogle}
                        className="flex justify-center mt-7 gap-2 text-black bg-white w-full lg:w-2/3 xl:w-2/4 rounded-full border-2 border-gray-500 font-semibold py-3 cursor-pointer"
                    >
                        <FcGoogle size="25px" />
                        Continue with Google
                    </motion.div>
                    <Link to="/register">
                        <motion.h4
                            className="w-full lg:w-2/3 xl:w-2/4 block text-center mt-7 hover:text-purple-400"
                            whileHover={{ scale: 0.95 }}
                        >
                            Don't have an account? Create one.
                        </motion.h4>
                    </Link>
                </form>
            </div>
        </div>
    )
}