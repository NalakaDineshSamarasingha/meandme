import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Info from "./pages/Info";
import ProfessionalCV from "./pages/cv";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/cv" element={<ProfessionalCV />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
