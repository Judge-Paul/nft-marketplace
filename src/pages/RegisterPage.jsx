import React, { useState, useContext } from "react";
import BG from "../assets/connect-bg.png"
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi"
import { FcGoogle } from "react-icons/fc"
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { toast } from "react-toastify";
import { AuthContext } from "../store/AuthContext";

export default function RegisterPage() {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    })
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })
    }
    const handleRegister = (event) => {
        event.preventDefault()
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredentials) => {
                navigate("/")
                toast.success("Account Created Successfully", {
                    position: "top-right",
                    autoClose: 1000,
                    theme: "dark",
                })
            }).catch((error) => {
                toast.error(`${error}`, {
                    position: "top-right",
                    autoClose: 1000,
                    theme: "dark",
                })
            })
    }
    const handleRegisterWithGoogle = () => {
        signInWithPopup(auth, provider)
          .then((result) => {
            const { user } = result
            toast.success(`Signed in as ${user.displayName}!`, {
              position: "top-right",
              autoClose: 1000,
              theme: "dark",
            })
            navigate("/")
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
                    Create Account
                </h4>
                <p className="text-lg lg:text-[1.35rem] mt-5 font-medium pb-10 xl:w-2/3">
                    Welcome! enter your details and start creating, collecting and selling NFTs.
                </p>
                <form onSubmit={handleRegister}>
                    <div className="relative mt-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className="pl-14 py-3 text-md text-black font-medium w-full lg:w-2/3 xl:w-2/4 rounded-full focus-none"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                            <HiOutlineMail className="w-5 h-5 text-gray-400"  />
                        </div>
                    </div>
                    <div className="relative mt-4">
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
                    <div className="relative mt-4">
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            className="pl-14 py-3 text-md text-black font-medium w-full lg:w-2/3 xl:w-2/4 rounded-full"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                        />
                        <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                            <HiOutlineLockClosed className="w-5 h-5 text-gray-400"  />
                        </div>
                    </div>
                    <motion.button 
                        className="mt-7 bg-[#A259FF] py-3 w-full lg:w-2/3 xl:w-2/4 rounded-full font-medium"
                        whileHover={{ scale: 0.95 }}    
                    > 
                        Create account
                    </motion.button>
                    <motion.div
                        whileHover={{ scale: 0.95 }}
                        onClick={handleRegisterWithGoogle}
                        className="flex justify-center mt-7 gap-2 text-black bg-white w-full lg:w-2/3 xl:w-2/4 rounded-full border-2 border-gray-500 font-semibold py-3 cursor-pointer"
                    >
                        <FcGoogle size="25px" />
                        Continue with Google
                    </motion.div>
                    <Link to="/login">
                        <motion.h4
                            className="w-full lg:w-2/3 xl:w-2/4 block text-center mt-7 hover:text-purple-400"
                            whileHover={{ scale: 0.95 }}
                        >
                            Already have an account?
                        </motion.h4>
                    </Link>
                </form>
            </div>
        </div>
    )
}