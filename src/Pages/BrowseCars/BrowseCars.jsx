import { useLoaderData } from "react-router";
import FeatureCard from "../../Componets/FeaturedCars/FeatureCard";
import { useState } from "react";

const BrowseCars = () => {

    const carData = useLoaderData()
    const [searchCar, setSearchCars] = useState(carData)
    const [loading, setLoading] = useState(false)

    const handleSearch = (e) => {
        e.preventDefault()
        const searchText = e.target.search.value;
        setLoading(true)
        fetch(`http://localhost:3000/search?search=${searchText}`)
            .then(res => res.json())
            .then(data => {
                setSearchCars(data)
                setLoading(false)
            })

    }
if(loading) return <div className="text-center mt-10"><span className="loading loading-spinner text-primary"></span>
</div>
    return (
        <div>
            <h1 className='text-center mt-10 mb-5 text-2xl font-bold'>All Cars</h1>
            <form className="flex justify-center items-center mb-10" onSubmit={handleSearch}>
                <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input name='search' type="search" placeholder="Search" />
                </label>
                <button className="btn btn-primary">Search</button>
            </form>
            <div className="w-10/12 mx-auto">
                <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-5">
                    {
                        searchCar.map(car => <FeatureCard key={car._id} car={car}></FeatureCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default BrowseCars;