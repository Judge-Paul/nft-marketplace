import React from "react";
import Category from "../components/Category";
import Creators from "../components/Creators";
import Discover from "../components/Discover";
import Highlighted from "../components/Highlighted";
import Home from "../components/Home";
import HowItWorks from "../components/HowItWorks";
import Subscribe from "../components/Subscribe";
import Trending from "../components/Trending";

export default function HomePage() {
    return (
        <>
            <Home />
            <Trending />
            <Creators />
            <Category />
            <Discover />
            <Highlighted />
            <HowItWorks />
            <Subscribe />
        </>
    )
}