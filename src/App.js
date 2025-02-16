import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import WhatYouGet from "./components/sections/WhatYouGet";
import Contact from "./components/sections/Contact";
import WebAppOverview from "./components/sections/WebAppoverview";
import Footer from "./components/common/Footer";
import HowItWorks from "./components/sections/HowItWorks";
import TechnologyOverview from "./components/sections/TechnologyOverview";
import Contact2 from "./components/sections/Contact2";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <HowItWorks />
                <WhatYouGet />
                <WebAppOverview />
                <TechnologyOverview />
                <Features />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/contact" element={<Contact2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
