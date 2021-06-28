import "./App.css";
import SearchDictionary from "./SearchDictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <SearchDictionary defaultKeyword="sunset" />

        <footer>
          {" "}
          Code By Catalina Undurraga,{" "}
          <a href="https://github.com/caundurragas/dictionary-project">
            open-source on GitHub{" "}
          </a>{" "}
        </footer>
      </div>
    </div>
  );
}
