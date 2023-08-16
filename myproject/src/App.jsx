import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";



function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Home></Home>} />
 <Route path="/about" element={<About></About>} />
 <Route path="/help" element={<Help></Help>} />
</Routes>
</BrowserRouter>

  )
}

export default App;
