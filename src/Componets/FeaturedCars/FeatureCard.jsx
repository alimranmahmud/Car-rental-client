import React from 'react';

const FeatureCard = ({car}) => {

    return (
        <div className="card bg-base-100  shadow-sm">
            <div >
                <img className='w-full'
                    src={car.image}
                    alt="Shoes" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{car.title}</h2>
                <p>{car.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn w-full btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;