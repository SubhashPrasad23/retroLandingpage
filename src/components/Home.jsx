import React, { useRef, useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Levelup from "./Levelup";
import About from "./About";
import frame1 from "../assets/FRAME (1).jpg";
import frame2 from "../assets/FRAME (2).jpg";
import frame3 from "../assets/FRAME (3).jpg";
import frame4 from "../assets/FRAME (4).jpg";
import { motion } from "framer-motion";

const Home = () => {
  const obj = [frame1, frame2, frame3, frame4];
  const [cart, setCart] = useState(0);

  const levelUpRef = useRef(null);
  const aboutRef = useRef(null);

  const scrollToProducts = () => {
    levelUpRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="px-10 pb-5">
      <Header scrollToProducts={scrollToProducts} scrollToAbout={scrollToAbout} cart={cart} />
      <Banner />
      <div className="my-3 flex md:flex-row flex-col gap-5 md:h-96">
        <div className="relative border-2 rounded h-full flex items-center p-5 md:w-3/5 overflow-hidden">


          <motion.div
            className="relative flex gap-5"
            drag="x"
            dragConstraints={{ left: -500, right: 500 }}
            animate={{ x: ["0%", "-100%"] }}
            transition={{ repeat: Infinity, repeatType: "loop", duration: 8, ease: "linear" }}
          >
            {[...obj, ...obj].map((hey, index) => (
              <img key={index} src={hey} className="h-96 w-72 rounded-lg object-cover" />
            ))}
          </motion.div>
        </div>

        <div className="flex flex-col h-full md:w-2/5 gap-5">
          <div className="border-2 bg-yellow-500 rounded py-5 text-white border-black font-extrabold shadow-[4px_4px_0px_black] text-center">
            <h4 className="head lg:text-6xl text-2xl">SHOP ALL</h4>
          </div>

          <div className="border-2 md:pt-3 py-3 text-center bg-blue-400 rounded-md px-5 space-y-2 lg:space-y-5 flex flex-col justify-center items-center h-full">
            <h2 className="head lg:pb-5 pb-3 border-b-2 border-dotted border-black font-extrabold text-white lg:text-6xl text-3xl tracking-tighter">
              SLAP TO WIN
            </h2>
            <button className="relative px-3 py-2 bg-yellow-500 border-2 rounded shadow-[4px_4px_0px_black]">
              <span className="head text-white font-extrabold lg:text-3xl text-xl">
                PLAY NOW
              </span>
            </button>
          </div>
        </div>
      </div>
      <div ref={levelUpRef}>
        <Levelup cart={cart} setCart={setCart} />
      </div>
      <About ref={aboutRef} />
    </div>
  );
};

export default Home;
