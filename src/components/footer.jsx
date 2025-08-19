import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi"

const footer = () => {
    return (
        <footer className="bg-black text-white py-16 px-6 mt-10">
            <div className="max-w-6xl mx-auto">
                <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                        Shihabeldin
                    </h2>

                    <div >
                        <h3 className="text-xl font-semibold mb-4 text-purple-200 ">
                            connect
                        </h3>
                        <div className="flex space-x-4">
                            <a className="text-gray-700 hover:text-violet-400 transition-colors " href="#">
                                <FiGithub className="w-5 h-5 " />
                            </a>
                            <a className="text-gray-700 hover:text-violet-400 transition-colors " href="#">
                                <FiLinkedin className="w-5 h-5 " />
                            </a>
                            <a className="text-gray-700 hover:text-violet-400 transition-colors " href="#">
                                <FiTwitter className="w-5 h-5 " />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center ">
                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Shihabeldin. all rights reserved
                </p>

                </div>

            </div>

        </footer>
    )
}

export default footer