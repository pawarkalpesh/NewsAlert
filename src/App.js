import { useState } from "react";
import Navbar from "./Components/Navbar";
import Navflex from "./Components/Navflex";

const App = () => {
  const [category, setCategory] = useState("world"); // Default category

  return (
    <div>
      <Navbar setCategory={setCategory} />
      <Navflex category={category} />
    </div>
  );
};

export default App;
