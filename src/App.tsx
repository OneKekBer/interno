import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./common/Header";
import "./index.css";
const App = () => {
   return (
      <BrowserRouter>
         <Header />
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
         </Routes>
      </BrowserRouter>
   );
};

export default App;
