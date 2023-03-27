import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MarketplacePage from "./pages/MarketplacePage";
import ConnectPage from "./pages/ConnectPage";
import RegisterPage from "./pages/RegisterPage";
import RankingsPage from "./pages/RankingsPage";
import ArtistPage from "./pages/ArtistPage";

export default function App() {
  return(
    <div className="bg-[#2B2B2B]">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/artist" element={<ArtistPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    
  )
}