// == Import
import githubLogo from "src/assets/images/logo-github.png";
import "./styles.scss";

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import SearchBar from "../SearchBar";
import Message from "../Message";
import ReposResults from "../ReposResults";
import Navbar from "../NavBar";
import Faq from "../Faq";

const axios = require("axios");

// == Composant
function App() {
  const [repos, setRepos] = useState([]);
  const [result, setResult] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("react");

  useEffect(() => {
    async function fetchGithubRepos() {
      try {
        const response = await axios.get(
          `https://api.github.com/search/repositories?q=${search}`
        );
        setRepos(response.data.items);
        setResult(response.data.total_count);
      } catch (error) {
        console.error(error);
      }
    }

    fetchGithubRepos();
  }, [search]);

  return (
    <div className="App">
      <img className="App__logo" src={githubLogo} alt="github logo" />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <SearchBar
                inputValue={inputValue}
                setInputValue={setInputValue}
                setSearch={setSearch}
              />
              <Message count={result} />
              <ReposResults repositories={repos} />
            </>
          }
        />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
