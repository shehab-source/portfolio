import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Cursor = () => {
    //refs for cursor
    const cursorRef = useRef(null);
    const cursorborderRef = useRef(null);

    //hiding on phones
    const isMobile = typeof window !== 'undefined' && window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) {
        return null;
    }
    
    useEffect(()=> {
        const cursor = cursorRef.current;
        const cursorBorder = cursorborderRef.current;

        gsap.set([cursor, cursorBorder], {
            xPercent    : -50,
            yPercent    : -50,

        })

        const xTo = gsap.quickTo(cursor, "x", { duration: 0.2, ease: "power3.out" });

        const yTo = gsap.quickTo(cursor, "y", { duration: 0.2, ease: "power3.out" });

        const xBorderTo = gsap.quickTo(cursorBorder, "x", { duration: 0.5, ease: "power.out" });

        const yBorderTo = gsap.quickTo(cursorBorder, "y", { duration: 0.5, ease: "power.out" });

        // mouse move handler

        const handlemousemove = (e) => {
            xTo(e.clientX);
            yTo(e.clientY);
            xBorderTo(e.clientX);
            yBorderTo(e.clientY);
        }

        // add event listener for mouse move
        window.addEventListener("mousemove", handlemousemove);

        //click animation
        document.addEventListener("mousedown", () => {
            gsap.to([cursorBorder,cursor], {
                scale: 0.6,
                duration: 0.2,
                ease: "power3.out",
            });
        });
        document.addEventListener("mouseup", () => {
            gsap.to([cursorBorder,cursor], {
                scale: 1,
                duration: 0.2,
                ease: "power3.out",
            });
        });

    }, [])
    return (


    <>
    {/* Custom Cursor dot */}
    
        <dev 
            ref={cursorRef}
            className="fixed top-0 left-0 w-[20px] h-[20px] bg-white rounded-full pointer-events-none z-[999] mix-blend-difference"
        />
    <dev 
        ref={cursorborderRef}
        className="fixed top-0 left-0 w-[40px] h-[40px] border border-white rounded-full pointer-events-none z-[] mix-blend-difference opacity-50"
    />
    </>
  )
}

export default Cursor