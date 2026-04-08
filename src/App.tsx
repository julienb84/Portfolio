// PAGES //
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import CatchAll from "./Pages/CatchAll";

// COMPONENTS //
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { ScrollToTop } from "./components/common/ScrollToTop";

// REACT HOOKS & COMPONENTS //
// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/*" element={<CatchAll />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
