import { useRef,useEffect} from "react";
import { gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ShinyText from "./Custom/ReactBits/shiny";
const Contact = () => {
    const circleRef = useRef(null)
    const sectionRef = useRef(null)
    const intialtextRef = useRef(null)
    const finaltextRef = useRef(null)


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)

        const cleanup = () => {
            ScrollTrigger.getAll().forEach((st) => {
                if(st.vars.trigger === sectionRef.current){
                    st.kill(true)
                }
            })
        }

        cleanup()

        gsap.set(circleRef.current, {scale: 1, backgroundColor: "white"})
        gsap.set(intialtextRef.current, {opacity: 1})
        gsap.set(finaltextRef.current, {opacity: 0})

        const tl = gsap.timeline({
            scrollTrigger:{
                 trigger: sectionRef.current,
            start: "top top",
            end:"+=200%",
            pin:true,
            scrup:0.5,
            anticipatePin: 1,
            fastScrollEnd:true,
            preventOverlaps: true,
            invalidateonRefresh:true,

            }
           
        })

        tl.to(
            circleRef.current,
            {
                scale:5,
                backgorundColor: "#9333EA",
                ease:"power1.inOut",
                duration: 0.5,
            },
            0,
        )



        tl.to(
            intialtextRef.current,
            {
                opacity: 0,
                ease: "power1.Out",
                duration:0.2,

            },
            0.1,
        )

        tl.to(
            circleRef.current,
            {
                scale:17,
                background:"#E9D5FF",
                boxShadow:"0 0 50px 20px rgba(233, 213, 255, 0.3)",
                ease:"power2.inOut",
                duration:0.5,

            },
            0.5,
        )

        tl.to(
            finaltextRef.current,{
                opacity:1,
                ease:"power2.in",
                duration: 0.2,
            },
            0.7,
        )

    })

  return (
    <section ref={sectionRef}
    
     className="flex items-center justify-center bg-black relative" style={{overscrollBehavior:"none"}}>

    
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
    <h1
    className="text-black md:w-[10rem] w-[20rem] lg:scale-[0.4] sm:scale-[0.25] scale-[0.7] sm:text-base leading-none mb-5">
        to the infinity and beyond
    </h1>

    <p className="text-black lg:w-[40rem] w-[20rem] absolute sm:mt-3 mt-1 md:scale-[0.1] scale-[0.068]">
        ljasdflskjdfalskdfjaskfj
        asdlf.jasldfjasldfjsdlfja
        lasdjlfsalfsjalfklsafjds
    </p>
    
    <button className="px-10 py-2 rounded-xl bg-black hover:bg-white hover:text-black transition-all duration-500 scale-[0.1] absolute sm:mt-9 mt-7 text-nowrap">
        contact me
    </button>

    
    </div>

    </div>


    </section>
  )
}

export default Contact