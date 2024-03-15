import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import PortfolioIndex from "./PortfolioIndex";
import Project01 from "./Project01";
import Project02 from "./Project02";
import Project03 from "./Project03";
import Project04 from "./Project04";
import Contact from "./Contact";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path="/" Component={Home} />
        <Route path="/PortfolioIndex" Component={PortfolioIndex} />
        <Route path="/Project01" Component={Project01} />
        <Route path="/Project02" Component={Project02} />
        <Route path="/Project03" Component={Project03} />
        <Route path="/Project04" Component={Project04} />
        <Route path="/Contact" Component={Contact} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
