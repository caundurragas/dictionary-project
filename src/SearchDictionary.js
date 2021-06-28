import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./SearchDictionary.css";
import "./Results.css";
import Photos from "./Photos";

export default function SearchDictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "563492ad6f91700001000001e44f2a89961a4c858cf7bd0849eaabfd";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <div className="some-page-wrapper">
          <div className="row">
            <div className="column">
              <div className="dictionaryTitle">
                <h1>DICTIONARY</h1>
                <p> Make your words meaningful</p>
              </div>
            </div>
            <div className="double-column">
              <div className="searchBox"></div>
              <h3>What word do you want to look up?</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  onChange={handleKeyword}
                  defaultValue={props.defaultKeyword}
                />
              </form>
            </div>
          </div>
        </div>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return null;
  }
}
