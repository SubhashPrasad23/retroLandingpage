import React from "react";
import { motion } from "framer-motion";

const About = ({ ref }) => {
    return (
        <div className="md:px-10 px-5 mt-3 rounded-md py-16 border-2 bg-yellow-500 text-black">
            <div ref={ref} className="">
                <motion.h2
                    className="text-4xl head md:text-6xl font-extrabold tracking-wide text-white"
                >
                    ABOUT
                </motion.h2>

                <motion.p
                    className="mt-6 max-w-3xl text-lg md:text-xl font-semibold leading-relaxed"
                >
                    Welcome to MrUrban, where style meets convenience! We bring you a
                    unique collection of products that blend urban aesthetics with comfort.
                    From trendy fashion to must-have accessories, we've got something for everyone.
                </motion.p>

                <motion.div>
                    <button className="mt-2 uppercase bg-white text-black font-bold md:px-6 px-4 md:py-3 py-2 md:text-lg rounded-md shadow-[4px_4px_0px_black]">
                        Explore More
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
