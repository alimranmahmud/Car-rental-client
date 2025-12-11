import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
    const carouselData = [
        {
            id: "slide1",
            title: "Find Your Perfect Rental Car",
            description: "Choose from a wide range of vehicles for your next journey at an affordable price.",
            buttonText: "Browse Cars",
            image: "https://plus.unsplash.com/premium_photo-1737182592549-0c83f93e2903?fm=jpg&q=60&w=3000",
            prev: "slide4",
            next: "slide2",
        },
        {
            id: "slide2",
            title: "Drive With Comfort & Style",
            description: "Our premium car collection ensures comfortable, safety, and a smooth driving experience.",
            buttonText: "Explore Models",
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…",
            prev: "slide1",
            next: "slide3",
        },
        {
            id: "slide3",
            title: "Affordable Rentals For Everyone",
            description: "Enjoy the lowest prices on all rental cars with flexible booking options.",
            buttonText: "View Offers",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2izSfH2iWc3WvbZTAhUque-B5gvKiKRMuVQ&s",
            prev: "slide2",
            next: "slide4",
        },
        {
            id: "slide4",
            title: "Your Journey Starts Here",
            description: "Book your dream car today and experience a hassle-free rental process.",
            buttonText: "Start Booking",
            image: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…",
            prev: "slide3",
            next: "slide1",
        },
    ];

    return (
        <div className="carousel w-full rounded-xl overflow-hidden mt-5">
            {carouselData.map((slide) => (
                <div key={slide.id} id={slide.id} className="carousel-item relative w-full">

                    <motion.img
                        src={slide.image}
                        className="w-full h-70 md:h-80 lg:h-120 object-cover"
                        alt="slide"
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    />

                    <motion.div
                        className="absolute inset-0 bg-black/40 flex items-center px-25"
                        initial={{ opacity: 0, x: -80 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="max-w-lg text-white space-y-3">
                            <motion.h2
                                className="text-4xl font-bold"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                {slide.title}
                            </motion.h2>

                            <motion.p
                                className="text-lg opacity-90"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                {slide.description}
                            </motion.p>

                            <motion.button
                                className="btn btn-primary"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ type: "spring", stiffness: 250 }}
                            >
                                {slide.buttonText}
                            </motion.button>
                        </div>
                    </motion.div>

                    <motion.div
                        className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        <a href={`#${slide.prev}`} className="btn btn-circle">❮</a>
                        <a href={`#${slide.next}`} className="btn btn-circle">❯</a>
                    </motion.div>
                </div>
            ))}
        </div>
    );
};

export default Banner;
