import { useLoaderData } from "react-router";
import FeatureCard from "../../Componets/FeaturedCars/FeatureCard";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const BrowseCars = () => {
    const carData = useLoaderData();
    const [searchCar, setSearchCars] = useState(carData);
    const [loading, setLoading] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        const searchText = e.target.search.value;
        setLoading(true);

        fetch(`http://localhost:3000/search?search=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setSearchCars(data);
                setLoading(false);
            });
    };

    return (
        <div>
            <h1 className='text-center mt-10 mb-5 text-3xl font-bold'>
                Browse Cars
            </h1>

            <form
                className="flex justify-center mb-10"
                onSubmit={handleSearch}
            >
                <motion.div
                    initial={{ scale: 1 }}
                    whileFocus={{ scale: 1.03 }}
                    whileHover={{ scale: 1.03 }}
                    className="flex items-center bg-white border shadow-sm px-4 py-2 rounded-full w-72 md:w-96 gap-2"
                >
                    <FaSearch className="text-gray-500 text-lg" />

                    <input
                        name="search"
                        type="search"
                        placeholder="Search cars..."
                        className="outline-none flex-1"
                    />
                </motion.div>

                <button className="btn btn-primary ml-3">
                    Search
                </button>
            </form>

            {loading && (
                <div className="text-center mt-5">
                    <span className="loading loading-spinner text-primary"></span>
                </div>
            )}

            <div className="w-10/12 mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {searchCar.map(car => (
                        <FeatureCard key={car._id} car={car} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BrowseCars;
