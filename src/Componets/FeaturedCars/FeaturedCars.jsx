import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturedCars = () => {

    const featuredCardData = [
        {
            "id": 1,
            "title": "Honda Civic 2022",
            "description": "A reliable and fuel-efficient sedan perfect for long trips and city rides.",
            "image": "https://images.unsplash.com/photo-1549921296-3a2f0b63e45b?w=1000&q=80",
            "buttonText": "View Details"
        },
        {
            "id": 2,
            "title": "Ford Mustang GT",
            "description": "A powerful sports car with premium features and thrilling performance.",
            "image": "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1000&q=80",
            "buttonText": "View Details"
        },
        {
            "id": 3,
            "title": "Toyota RAV4 Hybrid",
            "description": "An eco-friendly family SUV offering comfort, safety, and great mileage.",
            "image": "https://images.unsplash.com/photo-1542362567-b07e54358753?w=1000&q=80",
            "buttonText": "View Details"
        },
        {
            "id": 4,
            "title": "BMW 3 Series",
            "description": "A luxury sedan combining performance, elegance, and advanced tech.",
            "image": "https://images.unsplash.com/photo-1549924231-f129b911e442?w=1000&q=80",
            "buttonText": "View Details"
        },
        {
            "id": 5,
            "title": "Audi A4 Quattro",
            "description": "Premium interiors, smooth handling, and a perfect executive ride.",
            "image": "https://images.unsplash.com/photo-1549921296-3a2f0b63e45b?w=1000&q=80",
            "buttonText": "View Details"
        },
        {
            "id": 6,
            "title": "Tesla Model 3",
            "description": "Fully electric sedan with autopilot, fast charging, and zero emissions.",
            "image": "https://images.unsplash.com/photo-1511396275270-291d1c72c4fa?w=1000&q=80",
            "buttonText": "View Details"
        }
    ]


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