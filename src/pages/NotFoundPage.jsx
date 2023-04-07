import React from "react";
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md text-center">
        <h2 className="text-3xl font-extrabold text-white">Oops! Page not found</h2>
        <p className="mt-4 text-lg text-gray-200">
          Sorry, we couldn't find the page you were looking for. This could be because the page has been removed or the URL is incorrect.
        </p>
        <div className="mt-8">
          <p className="text-lg font-medium text-gray-200 mb-2">What can you do?</p>
          <ul className="text-left text-white">
            <li className="mb-2">
              <span className="text-blue-400 font-medium">Double-check the URL</span> – make sure the address you're trying to reach is correct.
            </li>
            <li className="mb-2">
              <span className="text-blue-400 font-medium">Go back to the homepage</span> – start over and explore more of our site.
            </li>
            <li className="mb-2">
              <span className="text-blue-400 font-medium">Contact us</span> – if you think something is broken, let us know and we'll do our best to fix it.
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 sm:flex sm:justify-center">
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <Link to="/">
            <motion.div 
                whileHover={{ scale: 0.92 }}
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Go back to homepage
            </motion.div>
          </Link>
        </div>
        <motion.div whileHover={{ scale:0.92 }} className="mt-3 sm:mt-0 sm:ml-3">
          <a href="mailto:nftmarketplace@hotmail.com" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-gray-200 hover:bg-gray-300 md:py-4 md:text-lg md:px-10">
            Contact us
          </a>
        </motion.div>
      </div>
    </div>
  )
}