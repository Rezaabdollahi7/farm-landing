import Navbar from "./components/common/Navbar";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import Testimonials from "./components/sections/Testimonials";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <Testimonials />
      <Contact />
    </div>
  );
}

export default App;
