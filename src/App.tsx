// COMPONENTS //

// REACT HOOKS & COMPONENTS //
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center text-app-content font-bold">
        <h1>Joucou</h1>
      </div>
    </>
  );
}

export default App;
