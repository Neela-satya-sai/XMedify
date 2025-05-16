import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import MyBookings from "./pages/MyBookings/MyBookings"; // Ensure this exists
import ContextProvider from "./contextProvider.jsx";

const App = () => {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/my-bookings" element={<MyBookings />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
};

export default App;
