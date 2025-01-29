import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import WhatYouGet from "./components/sections/WhatYouGet";
// import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";
import WebAppOverview from "./components/sections/WebAppoverview";
import Footer from "./components/common/Footer";
import HowItWorks from "./components/sections/HowItWorks";
// import Gallery from "./components/sections/Gallery";
import TechnologyOverview from "./components/sections/TechnologyOverview";

function App() {
  return (
    <div className="App">
      <Hero />
      <HowItWorks />
      <WhatYouGet />
      <WebAppOverview />
      <TechnologyOverview />
      <Features />
      {/* <Testimonials />
      <Gallery /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
