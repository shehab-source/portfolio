// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import TextType from './Custom/ReactBits/TextType';
import LiquidChrome from './Custom/ReactBits/background';
import Lanyard from "./Custom/ReactBits/lanyard";

const HeroSection = () => {
  return (
    <section id="home" className=" bg-gradient-to-b from-black h-screen bg-gradient from-black flex xl:flex-row flex-col-reverse items-center justify-between lg:px-24 px-10 relative">
      {/* left section */}
      
      <div>
        <motion.h1
          initial={{ opacity: 0, y: 88 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 1.3, duration: 1.5 }}
          className="relative text-8xl lg:text-6xl md:text-6xl sm:text-2xl z-10 font-bold text-white mb-6 mt-5">
          Hi, I'm Shihabeldin Ahmed
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 88 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 40, damping: 25, delay: 2.3, duration: 1 }}
          className="relative text-xl md:text-1xl z-2 lg:text-xl text-purple-200 max-w-2xl mb-8 my-auto">


          <TextType
            text={[" I am a Computer Engineering student at the Arab Academy for Science, Technology and Maritime Transport.",
              "I am passionate about web development and design, and I love creating beautiful and functional websites.",
              "I am always eager to learn new technologies and improve my skills.",
              "Feel free to explore my portfolio and get in touch if you have any questions or opportunities!",
              "Thank you for visiting my portfolio!"]}
            typingSpeed={75}
            pauseDuration={1100}
            initialDelay={2000}
            showCursor={true}
            cursorCharacter="|"
          />
        </motion.p>
      </div>
      {/* right section */}


      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

    </section>
  )
}

export default HeroSection