// PAGES //
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";

// COMPONENTS //
import Header from "./components/header/Header";

// REACT HOOKS & COMPONENTS //
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
