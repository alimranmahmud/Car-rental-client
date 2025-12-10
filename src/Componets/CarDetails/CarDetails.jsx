import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const CarDetails = () => {
    const { id } = useParams()
    const [car, setCars] = useState([])
    useEffect(() => {
        fetch(`http://localhost:3000/cars/${id}`)
            .then(req => req.json())
            .then(data => {
                setCars(data)
            })
    }, [id])
    const {
        carName,
        image,
        description,
        category,
        rentPerDay,
        location,
        providerName,
        providerEmail,
        status
    } = car;

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">

            <div className="w-full h-72 overflow-hidden rounded-lg">
                <img
                    src={image}
                    alt={carName}
                    className="w-full h-full object-cover rounded-lg"
                />
            </div>

            <div className="mt-6 space-y-3">
                <h2 className="text-3xl font-bold">{carName}</h2>

                <p className="text-gray-600">{description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">

                    <p className="text-gray-700">
                        <span className="font-semibold">Category:</span> {category}
                    </p>

                    <p className="text-gray-700">
                        <span className="font-semibold">Location:</span> {location}
                    </p>

                    <p className="text-gray-700">
                        <span className="font-semibold">Rent Per Day:</span>
                        <span className="text-blue-600 font-semibold"> ${rentPerDay}</span>
                    </p>

                    <p className="text-gray-700">
                        <span className="font-semibold">Provider:</span> {providerName}
                    </p>

                    <p className="text-gray-700">
                        <span className="font-semibold">Provider Email:</span> {providerEmail}
                    </p>

                </div>
            </div>

            <div className="mt-6">
                {status === "unavailable" ? (
                    <button
                        className="btn w-full bg-gray-400 border-gray-400 cursor-not-allowed text-white text-lg"
                        disabled
                    >
                        Unavailable
                    </button>
                ) : (
                    <Link to={`/booking/${car._id}`}>
                        <button className="btn btn-primary w-full text-white text-lg">
                            Book Now
                        </button>
                    </Link>
                )}

            </div>
        </div>
    );
};

export default CarDetails;
