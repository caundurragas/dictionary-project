import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./SearchDictionary.css";
import "./Results.css";

export default function SearchDictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            onChange={handleKeyword}
            defaultValue={props.defaultKeyword}
          />
        </form>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
