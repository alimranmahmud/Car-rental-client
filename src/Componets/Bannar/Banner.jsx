import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
    const carouselData = [
        {
            id: "slide1",
            title: "Find Your Perfect Rental Car",
            description: "Choose from a wide range of vehicles for your next journey at an affordable price.",
            buttonText: "Browse Cars",
            image: "https://images.unsplash.com/photo-1716615188690-aea33d1d41f3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwYmFja2dvcnVuZCUyMGltYWdlfGVufDB8fDB8fHww",
            prev: "slide4",
            next: "slide2",
        },
        {
            id: "slide2",
            title: "Drive With Comfort & Style",
            description: "Our premium car collection ensures comfortable, safety, and a smooth driving experience.",
            buttonText: "Explore Models",
            image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyfGVufDB8fDB8fHww",
            prev: "slide1",
            next: "slide3",
        },
        {
            id: "slide3",
            title: "Affordable Rentals For Everyone",
            description: "Enjoy the lowest prices on all rental cars with flexible booking options.",
            buttonText: "View Offers",
            image: "https://images.unsplash.com/photo-1609326005487-361f2e1c2640?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjE2fHxjYXJ8ZW58MHx8MHx8fDA%3D",
            prev: "slide2",
            next: "slide4",
        },
        {
            id: "slide4",
            title: "Your Journey Starts Here",
            description: "Book your dream car today and experience a hassle-free rental process.",
            buttonText: "Start Booking",
            image: "https://images.unsplash.com/photo-1558486799-ebad18202175?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwYm13fGVufDB8fDB8fHww",
            prev: "slide3",
            next: "slide1",
        },
    ];

    return (
        <div className="carousel w-full rounded-xl overflow-hidden mt-5">
            {carouselData.map((slide) => (
                <div key={slide.id} id={slide.id} className="carousel-item relative w-full">

                    {/* Responsive Image Height */}
                    <motion.img
                        src={slide.image}
                        className="w-full h-60 sm:h-72 md:h-80 lg:h-[500px] object-cover"
                        alt="slide"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    />

                    {/* Responsive Text Container */}
                    <motion.div
                        className="absolute inset-0 bg-black/40 flex items-center px-4 sm:px-10 md:px-16 lg:px-24"
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="max-w-lg text-white space-y-2 sm:space-y-3">
                            
                            <motion.h2
                                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {slide.title}
                            </motion.h2>

                            <motion.p
                                className="text-sm sm:text-base md:text-lg opacity-90"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {slide.description}
                            </motion.p>

                            <motion.button
                                className="btn btn-primary btn-sm sm:btn-md"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 250 }}
                            >
                                {slide.buttonText}
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Navigation Arrows Responsive */}
                    <motion.div
                        className="absolute left-3 right-3 sm:left-5 sm:right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <a href={`#${slide.prev}`} className="btn btn-circle btn-sm sm:btn-md">❮</a>
                        <a href={`#${slide.next}`} className="btn btn-circle btn-sm sm:btn-md">❯</a>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
