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
import CollectionPage from "./pages/CollectionPage";
import NotFoundPage from "./pages/NotFoundPage";
import AuthProvider from "./store/AuthContext";

export default function App() {
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return(
    <div className="bg-[#2B2B2B] scrollbar-hide">
      <BrowserRouter>
        <AuthProvider>
        <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/marketplace" element={<MarketplacePage />} />
              <Route path="/rankings" element={<RankingsPage />} />
              <Route path="/connect" element={<ConnectPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/collection/:id" element={<CollectionPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
    
  )
}