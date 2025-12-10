import React, { useEffect, useState } from 'react';
import FeatureCard from './FeatureCard';

const FeaturedCars = () => {

    const [featuredCardData, setFeaturedCar] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch("http://localhost:3000/latest-cars")
        .then(res=>res.json())
        .then(data=>{
            setFeaturedCar(data)
            setLoading(false)
        })
    }, [])

  
    if (loading) return <div className="text-center mt-5"><span className="loading loading-spinner text-primary"></span></div>

    return (
        <div className='lg:w-11/12 mx-auto'>
            <h2 className='mt-20 font-bold text-xl mb-9'>Featured Cars </h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3  gap-5 lg:gap-5'>
                {
                    featuredCardData.map(car => <FeatureCard key={car.id} car={car}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedCars;