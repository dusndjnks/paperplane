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
import TestimonialThird from "./pages/secondarypages/TestimonialThird";
import Kavya from "./pages/couples/Kavya";
import Uk from "./pages/couples/Uk";
import Muslim from "./pages/couples/Muslim";
import Christain from "./pages/couples/Christain";
import BridetoBe from "./pages/couples/BridetoBe";
import Sajith from "./pages/couples/Sajith";
import Monu from "./pages/couples/Monu";
import Anoop from "./pages/couples/Anoop";
import Gokul from "./pages/couples/Gokul";

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
        <Route path="/jose&sreelekshmi" element={<TestimonialThird/>} />
        <Route path="/kavya" element={<Kavya/>} />
        <Route path="/Uk" element={<Uk/>} />
        <Route path="/muslim" element={<Muslim/>} />
        <Route path="/christain" element={<Christain/>} />
        <Route path="/wedding" element={<Wedding/>} />
        <Route path="/Bride" element={<BridetoBe/>} />
        <Route path="/sajith" element={<Sajith/>} />
        <Route path="/monu" element={<Monu/>} />
        <Route path="/divya" element={<Gokul/>} />
        <Route path="/anoop" element={<Anoop/>} />
      </Routes>
    </div>
  );
}

export default App;
