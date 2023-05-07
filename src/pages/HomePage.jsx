import React, { useContext } from "react";
import Category from "../components/Category";
import Creators from "../components/Creators";
import Discover from "../components/Discover";
import Highlighted from "../components/Highlighted";
import Home from "../components/Home";
import HowItWorks from "../components/HowItWorks";
import Subscribe from "../components/Subscribe";
import Trending from "../components/Trending";
import { AuthContext } from "../store/AuthContext";
import Spinner from "../components/Spinner";

export default function HomePage() {
    const { NFTsData } = useContext(AuthContext)
    return (
        <>
            {NFTsData.length > 0 ? <div>
                <Home />
                <Trending />
                <Creators />
                <Category />
                <Discover />
                <Highlighted />
                <HowItWorks />
                <Subscribe />
            </div>: 
            <Spinner />}
        </>
    )
}