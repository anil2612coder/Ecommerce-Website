import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Contect from "./pages/Contect";
import About from "./pages/About";
import Pagenotfound from "./pages/Pagenotfound";
import Policy from "./pages/Policy";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/about" element={<About />} />
        <Route path="/police" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
