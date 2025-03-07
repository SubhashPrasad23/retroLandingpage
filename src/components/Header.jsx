import React, { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const Header = ({ scrollToProducts, scrollToAbout, cart }) => {
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        if (cart > 0) {
            setIsAnimating(true);
            setTimeout(() => setIsAnimating(false), 500); // Reset animation after 500ms
        }
    }, [cart]);

    return (
        <div className="z-50 sticky top-0 bg-white md:border-b-4 border-b-3 md:py-5 py-3 flex items-center justify-between font-bold">
            <div className="hidden md:flex items-center space-x-5">
                <button className="uppercase border-2 px-4 py-1 rounded-lg shadow-[3px_3px_0_black] cursor-pointer" onClick={scrollToProducts}>
                    Shop All
                </button>
            </div>
            <h3 className="text-2xl">MrUrban</h3>

            <div className="hidden md:flex items-center space-x-5">
                <button className="uppercase border-2 px-4 py-1 rounded-lg shadow-[3px_3px_0_black] cursor-pointer" onClick={scrollToAbout}>
                    about
                </button>
                <button className="uppercase border-2 px-4 py-1 rounded-lg shadow-[3px_3px_0_black]">faq</button>

                {/* Animated Cart Button */}
                <motion.button
                    className="uppercase border-2 px-4 py-1 rounded-lg shadow-[3px_3px_0_black] cursor-pointer"
                    animate={isAnimating ? { scale: [1, 1.2, 1], rotate: [0, 5, -5, 0] } : {}}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    CART ({cart})
                </motion.button>
            </div>

            <button className="block md:hidden">
                <Menu />
            </button>
        </div>
    );
};

export default Header;
