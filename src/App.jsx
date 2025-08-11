import Header from "./components/header"
import HeroSection from "./components/HeroSection";
import Cursor from "./components/Cursor";
import Scroller from "./components/Scroller";
import AboutSection from "./components/AboutSection";

export default function App() {
  return (
    <div className="font-cairo">

      <Header />
      <HeroSection />
      <Cursor />
      <AboutSection />
      <Scroller />
    </div>
  )
}