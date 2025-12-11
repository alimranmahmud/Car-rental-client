import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';
import { motion } from "framer-motion";

const FeaturedCars = () => {

    const [featuredCardData, setFeaturedCar] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("https://car-rental-server-pink-sigma.vercel.app/latest-cars")
            .then(res => res.json())
            .then(data => {
                setFeaturedCar(data)
                setLoading(false)
            })
    }, [])

    if (loading)
        return (
            <div className="text-center mt-5">
                <span className="loading loading-spinner text-primary"></span>
            </div>
        );

    return (
        <motion.div
            className='lg:w-11/12 mx-auto'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <motion.h2
                className='mt-20 font-bold text-xl mb-9'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >
                Featured Cars
            </motion.h2>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-5'>
                {featuredCardData.map((car, index) => (
                    <motion.div
                        key={car.id}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: index * 0.15
                        }}
                        viewport={{ once: true }}
                    >
                        <FeatureCard car={car} />
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default FeaturedCars;
