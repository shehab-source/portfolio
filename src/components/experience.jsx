import Particles from "./Custom/ReactBits/particles";
import GradientText from "./Custom/ReactBits/gradientext";
import ScrollReveal from "./Custom/ReactBits/scrollreveal";
import AnimatedContent from './Custom/ReactBits/animatedcontent'
import FallingText from "./Custom/ReactBits/fallingtext";
const experience = () => {
    return (
        <section className="bg-gradient-to-t from-black mb-40">


            {/*particles backgorund*/}

        

            <div className="z-999" id="experience">
                <AnimatedContent

                    distance={300}

                    direction="vertical"

                    reverse={false}

                    duration={2}

                    ease="power3.out"

                    initialOpacity={0}

                    animateOpacity

                    scale={1.1}

                    threshold={0.2}

                    delay={0}

                >
                    {/*title*/}
                    <div className="mt-40" >
                        <p className="text-5xl text-center">
                            <GradientText
                                colors={["#9b0cf5ff", "#4079ff", "#9b0cf5ff", "#4079ff", "#9b0cf5ff"]}
                                animationSpeed={3}
                                showBorder={false}
                                className="custom-class"
                            >
                                My Experience
                            </GradientText></p>
                    </div>

                    {/*main text*/}

                    <div className="space-y-8 max-w-4xl mx-auto mt-20">
                        {/* Single Experience Item */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Left side */}
                            <div className="md:col-span-1">
                                <h3 className="text-xl font-semibold">frontend Developer</h3>
                                <p className="text-sm text-gray-500">2025 – Present</p>
                            </div>

                            {/* Right side */}
                            <div className="md:col-span-2">
                                <p className="text-gray-300">
                                    This portfolio, which showcases my work, is built with a modern tech stack including React, Framer Motion for smooth animations, and Tailwind CSS for efficient styling. My project history includes several front-end developments using HTML, CSS, JavaScript, and Bootstrap. I have also developed a small, functional project using PHP to understand server-side logic. To further expand my skillset, I am currently actively learning C# and the .NET ecosystem.
                                </p>
                                <ul className="list-disc list-inside mt-2 text-gray-400 mt-10">
                                    <li className="text-gray-100">HTML & CSS</li>
                                    <li className="text-gray-100">JavaScript</li>
                                    <li className="text-gray-500">C#</li>
                                    <li className="text-gray-450">PHP</li>
                                    <li className="text-gray-300">bootstrap</li>
                                    <li className="text-gray-350">react</li>
                                    <li className="text-gray-100">bootstrap</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </AnimatedContent>
                
            </div>

            

           

        </section>
    )
}

export default experience