import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import JoinForm from "./Pages/JoinForm";
import FullBoard from "./Pages/FullBoard";
// import Standout from "./Pages/events/Standout";
// import Aspire from "./Pages/events/Aspire";
// import Ideathon from "./Pages/events/Ideathon";
// import Nitigya from "./Pages/events/Nitigya";
import Events from "./Pages/Events";
import About from "./Pages/About";
import Thankyou from "./Pages/Thankyou";
import PrudenceRegistration from "./Pages/PrudenceRegistration/PrudenceRegistration";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/JoinForm" element={<JoinForm />} />
        <Route path="/FullBoard" element={<FullBoard />} />
        {/* <Route path="/events/standout" element={<Standout />} />
        <Route path="/events/aspire" element={<Aspire />} />
        <Route path="/events/nitigya" element={<Nitigya />} />
        <Route path="/events/ideathon" element={<Ideathon />} /> */}
        <Route path="/Events" element={<Events />} />
        <Route path="/About" element={<About />} />
        <Route path="/Thankyou" element={<Thankyou />} />
        <Route path="/PrudenceRegistration" element={<PrudenceRegistration />} />
      </Routes>
    </Router>
  );
}

export default App;
