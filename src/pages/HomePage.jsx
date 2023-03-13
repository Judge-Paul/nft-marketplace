import React from "react";
import Creators from "../components/Creators";
import Home from "../components/Home";
import Trending from "../components/Trending";

export default function HomePage() {
    return (
        <>
            <Home />
            <Trending />
            <Creators />
        </>
    )
}