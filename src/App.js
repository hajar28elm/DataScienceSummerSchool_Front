import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Programme from "./components/Programme";
import FAQ from "./components/FAQ";
import Sessions from "./components/Sessions";
import Applications from "./components/Applications";
import Form from "./components/Form";

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/keyApp" element={<Applications />} />
        <Route path="/sessions" element={<Sessions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/programme" element={<Programme />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
