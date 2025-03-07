import React from 'react'
import Card from './Card'
import frame1 from "../assets/FRAME (1).jpg"
import frame2 from "../assets/FRAME (2).jpg"
import frame3 from "../assets/FRAME (3).jpg"
import frame4 from "../assets/FRAME (4).jpg"
import blue from "../assets/blue.jpg"

const Levelup = ({ setCart, cart }) => {


    const products = [
        {
            name: "Limited Edition 100 Million Subscriber Long Sleeve",
            price: 350.00,
            image: frame4,
        },
        {
            name: "Limited Edition 100 Million Subscriber Tee",
            price: 300.00,
            image: frame3,
        },
        {
            name: "Beast Motorsports Hoodie",
            price: 600.00,
            image: frame2,
        },
        {
            name: "Investor 3M Reflective Hoodie",
            price: 500.00,
            image: frame1,
        }
    ];

    return (
        <div className="relative md:px-10 px-5 py-16  border-2 bg-pink-400 rounded-md flex flex-col items-center justify-center">
            <div
                className="h-full absolute inset-0 bg-cover bg-center opacity-30 rounded-md"
                style={{ backgroundImage: `url(${blue})` }}
            ></div>
            <div className="relative z-10 text-center space-y-5">
                <h1 className="head text-white font-extrabold lg:text-6xl md:text-5xl sm:text-4xl text-3xl  text-shadow-lg">
                    LEVEL UP YOUR SWAG
                </h1>
                <p className='text-2xl font-semibold'>Let's see that cart blow up</p>
                <div className='grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-col-1 gap-3'>
                    {products.map((product) => <Card key={product.name} setCart={setCart} cart={cart} product={product} />)}
                </div>
                <button className="mt-10 bg-yellow-500 md:px-10 px-5 md:py-3 py-1 border-2 lg:text-5xl md:text-4xl text-2xl font-extrabold rounded-md shadow-[4px_4px_0px_black]">
                    <span className='head text-white'>VIEW ALL PRODUCTS</span>
                </button>
            </div>
        </div>

    )
}

export default Levelup