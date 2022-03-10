import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AllQuotes from "./screens/AllQuotes";
import Home from "./screens/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quotes" element={<AllQuotes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
