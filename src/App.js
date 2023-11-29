import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home";
import Men from "./components/pages/men";
import Women from "./components/pages/women";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
// import Main_navbar from "./components/common_pages/main_navbar";
function App() {
  return (
    <div className="App p-0 m-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/nav" element={<Main_navbar />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
