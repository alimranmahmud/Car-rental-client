import React from "react";
import { motion } from "framer-motion";
import { FaCalendarCheck, FaHeadset, FaShieldAlt, FaDollarSign } from "react-icons/fa";

const CarRent = () => {
  const whyUsData = [
    {
      id: 1,
      title: "Easy Booking",
      description: "Easily book your desired car online within minutes.",
      icon: <FaCalendarCheck className="text-4xl text-primary" />,
    },
    {
      id: 2,
      title: "Affordable Rates",
      description: "Get the best rental prices with no hidden charges.",
      icon: <FaDollarSign className="text-4xl text-primary" />,
    },
    {
      id: 3,
      title: "Trusted Providers",
      description: "All vehicles are verified and trusted by thousands.",
      icon: <FaShieldAlt className="text-4xl text-primary" />,
    },
    {
      id: 4,
      title: "24/7 Support",
      description: "We provide round-the-clock customer support.",
      icon: <FaHeadset className="text-4xl text-primary" />,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
        Why Rent With Car Rental
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {whyUsData.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.06 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 text-center hover:shadow-lg"
          >
            <div className="flex justify-center mb-4">{item.icon}</div>

            <h3 className="font-semibold text-gray-800 text-lg">
              {item.title}
            </h3>

            <p className="text-sm text-gray-500 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CarRent;
