import Header from "./components/header"
import HeroSection from "./components/HeroSection";
import Cursor from "./components/Cursor";
import Scroller from "./components/Scroller";
import AboutSection from "./components/AboutSection";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Progressbar from "./components/progressbar";
import Contactform from "./components/contactform";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Particles from "./components/Custom/ReactBits/particles";
export default function App() {
  return (
    <div className="font-cairo">


      <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <Header />
      <HeroSection />
      <Cursor />
      <AboutSection />
      <Experience />
      <Projects />
      <Scroller />
      <Contactform />
      <Footer />
      <Progressbar />



    </div>
  )
}