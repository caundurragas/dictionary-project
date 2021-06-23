import "./App.css";
import SearchDictionary from "./SearchDictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1>Hello</h1>
        <SearchDictionary defaultKeyword="sunset" />
        <footer> Code By Catalina Undurraga</footer>
      </div>
    </div>
  );
}
