import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import AboutUs from "./components/AboutUs";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import LegalNotice from "./pages/LegalNotice";
import Hiring from "./pages/Hiring";
import CGU from "./pages/CGU";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentions-legales" element={<LegalNotice />} />
          <Route path="/CGU" element={<CGU />} />
          <Route path="recrutement" element={<Hiring />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}
