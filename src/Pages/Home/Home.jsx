import React from 'react';
import Banner from '../../Componets/Bannar/Banner';
import FeaturedCars from '../../Componets/FeaturedCars/FeaturedCars';
import CarRent from '../../Componets/CarRent/CarRent';
import TopRatedCars from '../../Componets/TopRatedCars/TopRatedCars';
import CustomerTestimonials from '../../Componets/CustomerTestimonials/CustomerTestimonials';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
           <FeaturedCars></FeaturedCars>
           <CarRent></CarRent>
           <TopRatedCars></TopRatedCars>
           <CustomerTestimonials></CustomerTestimonials>
        </div>
    );
};

export default Home;