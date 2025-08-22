import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from "./Custom/ReactBits/shiny";
import DecryptedText from './Custom/ReactBits/decodetext';
import { animate } from "framer-motion";
const Contact = () => {
    const circleRef = useRef(null)
    const sectionRef = useRef(null)
    const intialtextRef = useRef(null)
    const finaltextRef = useRef(null)

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



    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const cleanup = () => {
            ScrollTrigger.getAll().forEach((st) => {
                if (st.vars.trigger === sectionRef.current) {
                    st.kill(true)
                }
            })
        }

        cleanup()

        gsap.set(circleRef.current, { scale: 1, backgroundColor: "white" })
        gsap.set(intialtextRef.current, { opacity: 1 })
        gsap.set(finaltextRef.current, { opacity: 0 })

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=100%",
                pin: true,
                scrup: 0.5,
                anticipatePin: 1,
                fastScrollEnd: true,
                preventOverlaps: true,
                invalidateonRefresh: true,
                toggleActions:"play none none reverse",

            }

        })

        tl.to(
            circleRef.current,
            {
                scale: 5,
                backgorundColor: "#9333EA",
                ease: "power1.inOut",
                duration: 0.5,
            },
            0,
        )



        tl.to(
            intialtextRef.current,
            {
                opacity: 0,
                ease: "power1.Out",
                duration: 0.2,

            },
            0.1,
        )

        tl.to(
            circleRef.current,
            {
                scale: 17,
                background: "#cea6f8ff",
                boxShadow: "0 0 50px 20px rgba(233, 213, 255, 0.3)",
                ease: "power2.inOut",
                duration: 0.5,

            },
            0.5,
        )

        tl.to(
            finaltextRef.current, {
            opacity: 1,
            ease: "power2.in",
            duration: 0.2,
        },
            0.7,
        )

    })

    return (
        <section ref={sectionRef}
            
            className="flex items-center justify-center bg-gradient-to-t from-black to-[#9a74cf50] relative" style={{ overscrollBehavior: "none" }}>


            <div
                ref={circleRef}
                className="w-24 sm:w-28 
    md:w-32 h-24 md:h-32 rounded-full felx-items flex items-center justify-center 
    relative transition-shadow duration-1000
     shadow-violet-300/50 shadow-lg bg-gradient-to-r from-violet-400 to-pink-100"
            >
                <p
                    ref={intialtextRef}
                    className="text-black font-bold text-base sm:text-lg md:text-xl absolute insert-0 flex items-center text-center"
                >
                    SCROLL DOWN
                </p>

                <div
                    ref={finaltextRef}
                    className="text-center relative flex flex-col items-center justify-center opacity"
                >
                    <h1 id="contact"
                        className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.7] sm:text-base leading-none mb-5">
                       <DecryptedText

                            text="to the infinity and beyond"

                            speed={220}

                            maxIterations={20}

                            characters="qwertyuiopasdfghjklzxcvnm';[]/!@#?<>"

                            className="revealed"

                            parentClassName="all-letters"

                            encryptedClassName="encrypted"

                            animateOn="view"

                            sequential="true"

                        />
                    </h1>

                 

                    <a onClick={scrollToSection("contactform")}  className="px-10 py-2 rounded-full bg-black hover:bg-purple hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-9 mt-7 text-nowrap">
                        <ShinyText text="Contact me" disabled={false} speed={3} className='custom-class' />
                    </a>


                </div>

            </div>


        </section>
    )
}

export default Contact