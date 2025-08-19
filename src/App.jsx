import Header from "./components/header"
import HeroSection from "./components/HeroSection";
import Cursor from "./components/Cursor";
import Scroller from "./components/Scroller";
import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Progressbar from "./components/progressbar";
import Contactform from "./components/contactform";

export default function App() {
  return (
    <div className="font-cairo">

      <Header />
      <HeroSection />
      <Cursor />
      <AboutSection />
      <Scroller />
      <Contact />
      <Contactform />
      <Footer />
      <Progressbar />
      
      

    </div>
  )
}