import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Info from "./pages/Info";
import ProfessionalCV from "./pages/cv";
import ProjectDetailPage from "./pages/projects/carpool";
import TechStack3D from "./components/ThreeD";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/cv" element={<ProfessionalCV />} />
        <Route path="/carpool" element={<ProjectDetailPage />} />
        <Route path="/test" element={<TechStack3D />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
