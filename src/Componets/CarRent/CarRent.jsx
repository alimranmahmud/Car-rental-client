import React from 'react';

const CarRent = () => {
    const whyUsData = [
        {
            "id": 1,
            "title": "Easy Booking",
            "description": "Easily online release your reservations.",
            "icon": "📅"
        },
        {
            "id": 2,
            "title": "Affordable Rates",
            "description": "Findable, rental, and affordable rates.",
            "icon": "💲"
        },
        {
            "id": 3,
            "title": "Trusted Providers",
            "description": "Provided at predictable regulations.",
            "icon": "🛡️"
        },
        {
            "id": 4,
            "title": "24/7 Support",
            "description": "24/7 support anytime you need.",
            "icon": "🎧"
        }
    ]

    return (
        <div>

            <section className="container mx-auto px-4 py-10">

                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Why Rent With Us
                </h2>


                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {whyUsData.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 text-center hover:shadow-md transition"
                        >

                            <div className="text-4xl mb-3">{item.icon}</div>


                            <h3 className="font-semibold text-gray-800 text-lg">
                                {item.title}
                            </h3>


                            <p className="text-sm text-gray-500 mt-2">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CarRent;