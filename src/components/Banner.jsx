import React from 'react'
import blue from "../assets/blueHalf.jpg"

const Banner = () => {
    return (
        <div className='relative h-96 bg-pink-400 mt-3 border-2 rounded-md flex items-center justify-center'>
           
            <div
                           className="h-full absolute inset-0 bg-fit bg-center opacity-30 rounded-md"
                style={{
                    backgroundImage: `url(${blue})`,  backgroundSize: "cover", 
 }}
                       ></div>
            <div className='relative'>
                <h1 className="head font-extrabold 2xl:text-9xl xl:text-6xl md:text-7xl text-5xl text-yellow-500 tracking-tight">
                    MrUrban

                </h1>
                <div className=' absolute md:top-0 -top-2 md:-left-3 -left-5  px-1.5 py-0.5 bg-purple-500 rotate-[-10deg] border-2 rounded-md shadow-[4px_4px_0_black]'>
                    <h1 className="head font-extrabold md:text-3xl text-sm text-white ">
                        SHOP
                    </h1>
                </div>
            </div>
        </div>
    )
}

export default Banner