// PAGES //
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

// COMPONENTS //
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

// REACT HOOKS & COMPONENTS //
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isHome, setIsHome] = useState(false);

  return (
    <>
      <Router>
        <Header isHome={isHome} />
        <Routes>
          <Route path="/" element={<Home setIsHome={setIsHome} />} />
          <Route
            path="/projects"
            element={<Projects setIsHome={setIsHome} />}
          />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
