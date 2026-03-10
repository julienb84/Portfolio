// COMPONENTS //
import Header from "./components/header/Header";

// REACT HOOKS & COMPONENTS //
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
    </>
  );
}

export default App;
