import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MarketplacePage from "./pages/MarketplacePage";
import ConnectPage from "./pages/ConnectPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RankingsPage from "./pages/RankingsPage";
import ArtistPage from "./pages/ArtistPage";
import NftPage from "./pages/NftPage";

export default function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return(
    <div className="bg-[#2B2B2B]">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/marketplace" element={<MarketplacePage />} />
            <Route path="/rankings" element={<RankingsPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/artist" element={<ArtistPage />} />
            <Route path="/nft" element={<NftPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    
  )
}