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
import Ribbons from "./components/Custom/ReactBits/ribbon"
export default function App() {
  return (
    <div className="font-cairo">


      <div style={{ width: '100%', height: '100%', position: 'fixed' }}>
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={450}
          particleSpread={5}
          speed={0.2}
          particleBaseSize={100}
          moveParticlesOnHover={false}
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