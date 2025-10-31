import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEvent from "./pages/CreateEvent";

import { Toaster } from "react-hot-toast";
import EventDetail from "./pages/EventDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/create" element={<CreateEvent />} />
        </Routes>
        <Footer />

        
      </BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />
    </>
  );
}

export default App;
