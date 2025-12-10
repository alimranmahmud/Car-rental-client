import { Link } from "react-router";

const FeatureCard = ({ car }) => {
  const {_id, carName, image, rentPerDay, category, providerName } = car;


  return (
    <div className="card  bg-white shadow-md hover:shadow-xl transition rounded-lg border">
      
      <figure className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={carName}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </figure>

      <div className="card-body p-4">

        <h2 className="card-title text-lg font-bold text-gray-800">
          {carName}
        </h2>

        <p className="text-sm text-gray-500">Category: {category}</p>

        <p className="text-sm text-gray-500">Provider: {providerName}</p>

        <p className="font-semibold text-gray-700 text-lg">
          ${rentPerDay} <span className="text-sm text-gray-500">/day</span>
        </p>

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
