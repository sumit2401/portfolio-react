import { useEffect, useState } from "react";
import "./App.css";

import Main from "./Components/Main";
import Loader from "./Components/Icons/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 10000);
    };
    fetchData();
  }, []);
  return isLoading ? <Loader /> : <Main />;
}

export default App;
