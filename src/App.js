import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import Home from "./Pages/Home";
import JoinForm from "./Pages/JoinForm";
import FullBoard from "./Pages/FullBoard";
import Standout from "./components/Events/sub-events/Standout";
import Aspire from "./components/Events/sub-events/Aspire";
import Ideathon from "./components/Events/sub-events/Ideathon";
import Nitigya from "./components/Events/sub-events/Nitigya";
import Events from "./Pages/Events";
import About from "./Pages/About";
import Thankyou from "./Pages/Thankyou";
import PrudenceRegistration from "./Pages/PrudenceRegistration/PrudenceRegistration";
import ScrollToTop from "./components/ScrollToTop";
import ComingSoon from "./components/ComingSoon";
import RegistrationsClosed from "./components/RegistrationsClosed";
import "./App.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/JoinForm" element={<JoinForm />} /> */}
        <Route path="/FullBoard" element={<FullBoard />} />
        <Route path="/Events/sub-events/Standout" element={<Standout />} />
        <Route path="/Events/sub-events/Aspire" element={<Aspire />} />
        <Route path="/Events/sub-events/Nitigya" element={<Nitigya />} />
        <Route path="/Events/sub-events/Ideathon" element={<Ideathon />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/About" element={<About />} />
        <Route path="/Thankyou" element={<Thankyou />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
        {/* <Route path="/PrudenceRegistration" element={<PrudenceRegistration />} /> */}
        <Route path="/RegistrationsClosed" element={<RegistrationsClosed />} />
      </Routes>
    </Router>
  );
}

export default App;
