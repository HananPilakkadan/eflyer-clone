import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/screens/Home/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
