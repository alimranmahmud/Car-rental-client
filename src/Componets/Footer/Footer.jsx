import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCarSide } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A0A0A] text-gray-300 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="flex items-center gap-2 text-2xl font-bold text-white mb-3">
            <FaCarSide className="text-blue-400" /> Car Rental
          </h2>
          <p className="text-gray-400 leading-6">
            Reliable and affordable car rental service.  
            Explore cities, enjoy long drives, and rent the perfect car for your next journey.
          </p>
          <div className="flex gap-4 mt-4 text-xl">
            <FaFacebook className="hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer" />
            <FaYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-white font-bold text-xl mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Browse Cars</li>
            <li className="hover:text-white cursor-pointer">Top Rated Cars</li>
            <li className="hover:text-white cursor-pointer">Latest Listings</li>
            <li className="hover:text-white cursor-pointer">Customer Reviews</li>
            <li className="hover:text-white cursor-pointer">Become a Host</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-white font-bold text-xl mb-4">Customer Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-white cursor-pointer">Help Center</li>
            <li className="hover:text-white cursor-pointer">Booking Guide</li>
            <li className="hover:text-white cursor-pointer">Payment Options</li>
            <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
            <li className="hover:text-white cursor-pointer">Refund Policy</li>
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.9 }}
        >
          <h3 className="text-white font-bold text-xl mb-4">Contact Us</h3>
          <div className="space-y-3 text-gray-400">
            <p className="flex items-center gap-2"><FaMapMarkerAlt /> Banani, Dhaka, Bangladesh</p>
            <p className="flex items-center gap-2"><FaPhone /> +880 1888-000000</p>
            <p className="flex items-center gap-2"><FaEnvelope /> support@carrental.com</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }} 
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1 }}
        className="text-center text-gray-500 mt-10 border-t border-gray-700 pt-6"
      >
        © {new Date().getFullYear()} Car Rental — All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
