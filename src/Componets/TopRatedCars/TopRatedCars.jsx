import React, { useEffect, useState } from 'react';
import { FaUsers } from 'react-icons/fa';

const TopRatedCars = () => {

    const [topCar, setTopCars] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:3000/top/rated-cars")
            .then(res => res.json())
            .then(data => {
                setTopCars(data)
                setLoading(false)
            })
    }, [])

    if (loading) return <div className='text-center mt-10'><span className="loading loading-spinner text-primary"></span></div>
    return (
        <div>
            <h2 className='text-2xl font-bold'>Top Rated Cars</h2>


            <div className='grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    topCar.map(car => <div className='bg-white shadow-sm border border-gray-100 rounded-xl p-6  hover:shadow-md transition'>
                        <div><img className='h-25 object-cover mb-5' src={car.image} alt="" /></div>
                        <div className='flex justify-between items-center gap-5'>
                            <p className='text-xl font-bold'>{car.carName}</p>
                        <p className='flex justify-center items-center gap-2'><FaUsers /> {car.usesCar}</p>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default TopRatedCars;