import { Result } from 'postcss';
import AnimatedContent from './Custom/ReactBits/animatedcontent'
import React from 'react'

const contactform = () => {

    

    const [result, setResult] = React.useState("Send Message")
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "cb44729e-e856-4d30-bbdb-02ba7936b7ca");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <section className="bg-gradient-to-b from-black to-[#9a74cf50] mt-50">
            <AnimatedContent

                distance={200}

                direction="vertical"

                reverse={true}

                duration={2}

                ease="power3.out"

                initialOpacity={0.2}

                animateOpacity

                scale={1.1}

                threshold={0.2}

                delay={0.5}

            >
                <div className='flex items-center justify-center h-screen mt-10' >
                    <div className="w-1/2 backdrop-blur-md rounded-2xl shadow-lg">
                        <h2 className=" felx justify-center itmes-centertext-3xl font-bold text-white mb-6">leave a message</h2>

                        <form className="space-y-4" onSubmit={onSubmit}>
                            <div>
                                <label className="block text-sm text-gray-200 mb-1">Name</label>
                                <input 
                                    name='name'
                                    type="text"
                                    placeholder="Your name"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-gray-500 focus:ring-2 focus:ring-violet-400 focus:outline-none"
                                />
                            </div>

                            <div id="contact" >
                                <label className="block text-sm text-gray-200 mb-1">Email</label>
                                <input
                                    name='email'
                                    type="email"
                                    required
                                    placeholder="Your email"
                                    className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-gray-500 focus:ring-2 focus:ring-violet-400 focus:outline-none"
                                />
                            </div>

                            <div>
                                <label className="block text-sm text-gray-200 mb-1">Message</label>
                                <textarea
                                    name='message'
                                    placeholder="Your message..."
                                    rows="4"
                                    required
                                    className="w-full px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 border border-gray-500 focus:ring-2 focus:ring-violet-400 focus:outline-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-violet-500/40"
                            >
                             <span>{result}</span>
                            </button>
                        
                        </form>

                    </div>
                </div>
            </AnimatedContent>
        </section>
    )
}

export default contactform