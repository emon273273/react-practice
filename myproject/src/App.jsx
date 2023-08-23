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
import Tasks from "./pages/Tasks";
import ClockPage from "./pages/ClockPage";



function App() {
  return (
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<Home></Home>} />
 <Route path="/about" element={<About></About>} />
 <Route path="/help" element={<Help></Help>} />
 <Route path="/clock" element={<ClockPage></ClockPage>} />
 <Route path="tasks"element={<Tasks></Tasks>}/>
</Routes>
</BrowserRouter>

  )
}

export default App;
