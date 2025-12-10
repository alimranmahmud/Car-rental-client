import { useLoaderData } from "react-router";
import FeatureCard from "../../Componets/FeaturedCars/FeatureCard";

const BrowseCars = () => {

    const carData = useLoaderData()

    return (
        <div>
            <h1 className='text-center mt-10 mb-5 text-2xl font-bold'>All Cars</h1>
            <div className="w-10/12 mx-auto">
                <div className="grid  lg:grid-cols-3 md:grid-cols-2 gap-5">
                {
                    carData.map(car => <FeatureCard key={car._id} car={car}></FeatureCard>)
                }
            </div>
            </div>
        </div>
    );
};

export default BrowseCars;