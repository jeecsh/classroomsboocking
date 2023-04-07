import React from "react";
// eslint-disable-next-line
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Booking from "./pages/booking/booking";

// eslint-disable-next-line
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
