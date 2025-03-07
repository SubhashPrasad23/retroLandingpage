import React from 'react';

const Card = ({ product, cart, setCart }) => {


    const handlerCart = () => {
        setCart((prev) => ( prev+ 1))
        console.log(cart)
}

return (
    <div className='border-3 rounded-md lg:w-80 flex flex-col'>
        <div className='border-b-2 h-52'>
            <img src={product.image} className='w-full h-full  rounded-t-md ' />
        </div>
        <div className='w-full bg-[#5FD0B4]  gap-2  flex-1 flex md:flex-row flex-col md:items-center rounded-b-md font-semibold md:px-2 px-4 py-3 text-lg'>
            <p className='md:w-3/5  text-start'>{product.name}</p>
            <div className='md:w-2/5 md:space-y-2 flex md:flex-col flex-row items-center justify-between'>
                <button className=' px-2 py-1  border-2 bg-white text-sm rounded shadow-[4px_4px_0px_black] '>
                    {"RS " + product.price}
                </button>
                <button 
                
                onClick={handlerCart} className='cursor-pointer px-2 py-1 border-2 bg-white text-sm rounded shadow-[4px_4px_0px_black] '>
                    Add to cart
                </button>
            </div>

        </div>
    </div>
);
};

export default Card;
