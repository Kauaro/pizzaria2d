import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inicio from "./pages/Inicio";

const App = () => {

  const [color] = useState("#ebbdff")
  document.body.style.backgroundColor = color

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Inicio" element={<Inicio/>}/>
    </Routes>
  )
}

export default App