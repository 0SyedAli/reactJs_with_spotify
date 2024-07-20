import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Track";
import About from "./components/About";
import Contact from "./components/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
// import { motion } from "framer-motion";
import "./global.css";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Track from "./components/Track";

function App() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* <header>
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </header> */}
      <div className="dashboard">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="track" element={<Track />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
