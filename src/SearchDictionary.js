import React, { useState } from "react";
import axios from "axios";
import "./SearchDictionary.css";

export default function SearchDictionary() {
  let [keyword, setKeyword] = useState("");

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyword} />
      </form>
    </div>
  );
}
