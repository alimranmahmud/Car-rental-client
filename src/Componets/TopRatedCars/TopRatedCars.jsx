import React, { useEffect, useState } from "react";
import { FaUsers, FaCarSide, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const TopRatedCars = () => {
  const [topCar, setTopCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://car-rental-server-pink-sigma.vercel.app/top/rated-cars")
      .then((res) => res.json())
      .then((data) => {
        setTopCars(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="text-center mt-10">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );

  return (
    <div className="lg:w-11/12 mx-auto mt-16">
      {/* Section Title */}
      <div className="flex items-center gap-3 mb-6">
        <FaStar className="text-yellow-500 text-3xl" />
        <h2 className="text-3xl font-bold">Top Rated Cars</h2>
      </div>

      {/* Card List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topCar.map((car, index) => (
          <motion.div
            key={car._id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }} 
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-sm border border-gray-100 rounded-xl p-5 hover:shadow-lg transition cursor-pointer"
          >
            {/* Car Image */}
            <motion.img
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.3 }}
              src={car.image}
              alt={car.carName}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />

            {/* Car Title + Usage */}
            <div className="flex justify-between items-center mb-2">
              <p className="text-xl font-semibold flex items-center gap-2">
                <FaCarSide className="text-blue-600" /> {car.carName}
              </p>

              <p className="flex items-center gap-1 font-medium text-gray-700">
                <FaUsers className="text-orange-500" /> {car.usesCar}
              </p>
            </div>

            {/* Status */}
            <p
              className={`px-2 py-1 text-sm rounded-md w-fit ${
                car.status === "available"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {car.status}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedCars;
