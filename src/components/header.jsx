// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import GlitchText from './Custom/ReactBits/GlitchText';
import { animate } from "framer-motion";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -210; // offset for sticky header
      const targetY = section.getBoundingClientRect().top + window.scrollY + yOffset;

      // Animate window.scrollY using Framer Motion
      animate(window.scrollY, targetY, {
        duration: 0.8,
        ease: "easeInOut",
        onUpdate: (latest) => {
          window.scrollTo(0, latest);
        },
      });
    }
  };

  return (
    <header className="relative w-full z-50 transition-all duration-300  top-0 sticky z-[999] header">
    
      <div className=" bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 backdrop-blur bg-opacity-10 dark:bg-opacity-10 ">
        <div className="container mx-auto px-4  sm:px-6 lg:px-8 flex items-center h-16 md:h-20">
          {/* Logo or Title can be added here */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 25,
              delay: 0.3, // Adjust the delay as needed
              duration: 1.2,

            }}
            className="flex items-center"
          >
            
            <GlitchText
              speed={1}
              enableShadows={true}
              enableOnHover={true}
              className='custom-class'
            >
              Shihabeldin Ahmed
            </GlitchText>
          </motion.div>
          {/* Navigation bar */}

          <div className="lg:flex hidden space-x-10 items-left ml-auto text-xl">
            

            {["Home", "About", "Experience", "Projects", "Contact"].map((item, index) => (
              <motion.a
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: 0.7 + index * 0.2, // Adjust the delay as needed
                  duration: 1.2,
                }}
                key={item}
                onClick={(e) =>  {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase())
                }}
                className="relative text-gray-800 dark:text-gray-200 hover:textviolet-600 dark:hover:text-violet-400 font-medium transition-colors duration-300 group"
              >
                {item}
                <span className="absolute inset-x-0 bottom-0 h-1 bg-violet-600 dark:bg-violet-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </motion.a>
            ))}
            <div className="flex space-x-4 ml-4 my-auto">
              <motion.a
              href="https://github.com/shehab-source"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [1, 1.2, 1] }}
                transition={{ delay: 1.5, duration: 2 }}
                className="text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                >
                <FiGithub className="w-5 h-5 " />
              </motion.a>
              <motion.a
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: [1, 1.2, 1] }}
                transition={{ delay: 1.5, duration: 2 }}
                className="text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-300"
                >
                <FiLinkedin className="w-5 h-5 " />
              </motion.a>
            </div>
          </div>
          {/*mobile menu button*/}
          <div className="lg:hidden flex items-center ml-auto">
            <motion.button


              whileTap={{ scale: 0.7 }}

              onClick={toggleMenu} >
              {isOpen ? <FiX className="w-6 h-6 text-gray-800 dark:text-gray-200" /> : <FiMenu className="w-8 h-8 text-gray-800 dark:text-gray-200" onClick={toggleMenu} />}
            </motion.button>
          </div>
          
          {/* Mobile Menu */}
          <div className="lg:hidden flex bg-white dark:bg-gray-900  w-full">
            <nav className={`flex flex-col space-y-4 ${isOpen ? "block" : "hidden"} py-4`}>
              {["Home", "About", "Experience", "Projects", "Contact"].map((item) => (
                <a
                  className="text-gray-700 dark:text-gray-300 font-medium hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
                  key={item}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                    setIsOpen(false);
                  }}
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

        </div>
      </div>
    </header>
  );
}

export default Header;
