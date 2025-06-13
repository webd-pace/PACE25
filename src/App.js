import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import JoinForm from "./Pages/JoinForm";
import FullBoard from "./Pages/FullBoard";
import Standout from "./Pages/events/Standout";
import Aspire from "./Pages/events/Aspire";
import Ideathon from "./Pages/events/Ideathon";
import Nitigya from "./Pages/events/Nitigya";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JoinForm" element={<JoinForm />} />
        <Route path="/FullBoard" element={<FullBoard />} />
        <Route path="/events/standout" element={<Standout />} />
        <Route path="/events/aspire" element={<Aspire />} />
        <Route path="/events/nitigya" element={<Nitigya />} />
        <Route path="/events/ideathon" element={<Ideathon />} />
      </Routes>
    </Router>
  );
}

export default App;
