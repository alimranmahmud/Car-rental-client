import { Link } from "react-router";

const FeatureCard = ({ car }) => {
  const {_id, carName, image, rentPerDay, category, providerName } = car;


  return (
    <div className="card  bg-white shadow-md hover:shadow-xl transition rounded-lg border">
      
      {/* Image Section */}
      <figure className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={carName}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </figure>

      {/* Card Body */}
      <div className="card-body p-4">

        {/* Car Name */}
        <h2 className="card-title text-lg font-bold text-gray-800">
          {carName}
        </h2>

        {/* Category */}
        <p className="text-sm text-gray-500">Category: {category}</p>

        {/* Provider */}
        <p className="text-sm text-gray-500">Provider: {providerName}</p>

        {/* Rent Price */}
        <p className="font-semibold text-gray-700 text-lg">
          ${rentPerDay} <span className="text-sm text-gray-500">/day</span>
        </p>

        {/* Actions */}
        <div className="card-actions mt-3">
          <button className="btn btn-primary btn-sm w-full">
            <Link to={`/car_details/${_id}`}>View Details</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
