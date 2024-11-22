import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import WhatYouGet from "./components/sections/WhatYouGet";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import WebAppOverview from "./components/sections/WebAppoverview";
import OurTeam from "./components/sections/OurTeam";
import Footer from "./components/common/Footer";
import HowItWorks from "./components/sections/HowItWorks";
import Gallery from "./components/sections/Gallery";
import TechnologyOverview from "./components/sections/TechnologyOverview";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <HowItWorks />
      <WhatYouGet />
      <WebAppOverview />
      <TechnologyOverview />
      <Features />
      <Testimonials />
      <Gallery />
      <Contact />
      <OurTeam />
      <Footer />
    </div>
  );
}

export default App;
