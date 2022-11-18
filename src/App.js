import "./App.css";
import Albums from "./components/Albums";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Albums />
      </header>
    </div>
  );
}

export default App;
