import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ConnectPage from "./pages/ConnectPage";

export default function App() {
  return(
    <div className="bg-[#2B2B2B]">
      <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/connect" element={<ConnectPage />} />
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    
  )
}