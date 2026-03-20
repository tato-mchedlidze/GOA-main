import { Routes, Route } from "react-router-dom";
import Home from "./home";
import About from "./About";
import Profile from "./Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
