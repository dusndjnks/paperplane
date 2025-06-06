import { Routes , Route } from "react-router-dom";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import About from "./pages/About";
import SaveTheDate from "./pages/secondarypages/SaveTheDate";
import Wedding from "./pages/secondarypages/Wedding";
import Engagement from "./pages/secondarypages/Engagement";
import ScrollToTop from "./components/ScrollToTop";
import TestimonialFirst from "./pages/secondarypages/TestimonialFirst";
import TestimonialSecond from "./pages/secondarypages/TestimonialSecond";

function App() {
  return (
    <div className="App">
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/save-the-date" element={<SaveTheDate />} />
        <Route path="/wedding" element={<Wedding />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/swasika&pream" element={<TestimonialFirst/>} />
        <Route path="/rishi&aiswarya" element={<TestimonialSecond />} />
      </Routes>
    </div>
  );
}

export default App;
