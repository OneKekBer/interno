import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Header from "./common/Header";
import "./index.css";
import Footer from "./common/Footer";
import Services from "./pages/services/Services";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import NotFound from "./pages/notfound/NotFound";
const App = () => {
   function ScrollToTop() {
      const { pathname } = useLocation();

      useEffect(() => {
         window.scrollTo(0, 0);
      }, [pathname]);

      return null;
   }
   return (
      <BrowserRouter>
         <AnimatePresence>
            <Header />
            <ScrollToTop />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/about" element={<About />} />
               <Route path="/services" element={<Services />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
         </AnimatePresence>
      </BrowserRouter>
   );
};

export default App;
