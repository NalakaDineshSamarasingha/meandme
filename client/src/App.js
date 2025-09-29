import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./pages/Home";
import ProjectDetail from './pages/ProjectDetail';
import ScrollToTop from './components/ScrollToTop';
import PageLoader from './components/PageLoader';


const App = () => {

  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageLoader />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/project/:slug" element={<ProjectDetail/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
