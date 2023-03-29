import { GlobalStyle } from "./components/styles/Global";
import PageContent from "./components/PageContent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, createContext } from "react";

export const myContext = createContext();

export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/data.json");
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router>
        <myContext.Provider value={data}>
          <Routes>
            <Route path="/" element={<PageContent />} />
            {data.map((item, index) => (
              <Route
                path={`/${item.name.toLowerCase()}`}
                element={<PageContent />}
                key={index}
              />
            ))}
          </Routes>
        </myContext.Provider>
      </Router>
    </>
  );
}
