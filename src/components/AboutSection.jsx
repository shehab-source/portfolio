
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutSection = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const abtref = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(titleRef.current,
            { opacity: 0, y: 100 },
            {
                y: -300,
                opacity: 1,
                duration: 2,

                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 40%",
                    toggleActions: "play none none reverse",
                }
            }
        )
        gsap.fromTo(abtref.current,
            { y: 100, opacity: 0, filter: "blur(10px)" },
            {
                y: -600,
                opacity: 1,
                filter: "blur(0px)",
                duration: 2,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 40%",
                    toggleActions: "play none none reverse",
                }

            }
        )
    })

    return (

        <div id="about">
        <section ref={sectionRef}  className="h-screen relative overflow-hidden bg-gradient-to-b from-black to-[#9a74cf50]">
            <div className="flex flex-col items-center justify-center h-full">
                <h1 ref={titleRef} className="text-3xl md:text-6xl mt-40 font-bold sm:mb-16 text-center my-0 text-white opacity-0">
                    About Me
                </h1>
            </div>
            <div ref={abtref} className="left-0 right-0 flex items-center justify-center mx-auto my-auto">
                <h3 className="text-white text-lg md:text-2xl text-center max-w-3xl mx-auto px-4 mt-20">
                    Hello! I'm Shihabeldin Ahmed, a passionate web developer with a love for creating dynamic and responsive web applications. With a background in computer science and a keen eye for design, I strive to build user-friendly interfaces that enhance the overall user experience. My expertise lies in HTML, CSS, JavaScript, and React, and I am always eager to learn new technologies and improve my skills.
                </h3>

            </div>
        </section>
        
        </div>
    )

}

export default AboutSection