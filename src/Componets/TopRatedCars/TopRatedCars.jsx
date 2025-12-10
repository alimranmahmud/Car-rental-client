import React from 'react';

const TopRatedCars = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold'>Top Rated Cars</h2>
            <div className='bg-white shadow-sm border border-gray-100 rounded-xl p-6  hover:shadow-md transition'>
                <div><img className='h-25' src= "https://images.unsplash.com/photo-1589391886645-d51931b240d1?w=600&h=400&fit=crop&q=80" alt="" /></div>
                <p className='text-xl font-bold'>Audi 05</p>
                <p>⭐⭐⭐⭐⭐</p>
            </div>
        </div>
    );
};

export default TopRatedCars;