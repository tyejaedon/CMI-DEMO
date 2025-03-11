import {  Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Footer from "./components/footer";
import EventsPage from "./pages/events";
import AccountabilityPage from "./pages/accbility";
import DonationPage from "./pages/donation";
import Dashboard from "./pages/dashboard";

import "./App.css"; // Main styling

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<EventsPage/>} />
          <Route path="/donations" element={<DonationPage/>} />
          <Route path="/accountability" element={<AccountabilityPage/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
