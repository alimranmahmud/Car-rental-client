import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaCarSide, FaUser, FaTags } from "react-icons/fa";

const FeatureCard = ({ car }) => {
  const { _id, carName, image, rentPerDay, category, providerName, status } = car;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}    
      whileInView={{ opacity: 1, y: 0 }}   
      viewport={{ once: false }}         
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.03 }}        
      className="card bg-white shadow-md hover:shadow-xl transition rounded-lg border relative"
    >
     
      <figure className="h-48 w-full overflow-hidden">
        <motion.img
          src={image}
          alt={carName}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.10 }}
          transition={{ duration: 0.4 }}
        />
      </figure>

     
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className={`px-3 py-1 text-white rounded font-semibold border w-5/12 text-center absolute lg:left-50 left-39 top-2 
          ${status === "available" ? "bg-green-600 border-green-600" : "bg-red-600 border-red-600"}`}
      >
        {status}
      </motion.h2>

     
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold text-gray-800 flex items-center gap-2">
          <FaCarSide className="text-blue-600" /> {carName}
        </h2>

        <p className="text-sm text-gray-600 flex gap-2 items-center">
          <FaTags className="text-orange-500" /> {category}
        </p>

        <p className="text-sm text-gray-600 flex gap-2 items-center">
          <FaUser className="text-purple-600" /> {providerName}
        </p>

        <p className="font-semibold text-gray-700 text-lg">
          ${rentPerDay} <span className="text-sm text-gray-500">/day</span>
        </p>

        <div className="card-actions mt-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="btn btn-primary btn-sm w-full"
          >
            <Link to={`/car_details/${_id}`}>View Details</Link>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
