const CustomerTestimonials = () => {

    const testimonials = [
  {
    "id": 1,
    "name": "John D.",
    "review": "The service was excellent! The car was in perfect condition and the rental process was smooth.",
    "rating": 5,
    "avatar": "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    "id": 2,
    "name": "Sarah M.",
    "review": "Easy booking process and friendly staff. I will definitely rent again!",
    "rating": 5,
    "avatar": "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    "id": 3,
    "name": "David K.",
    "review": "Affordable prices and excellent customer support. Highly recommended.",
    "rating": 4,
    "avatar": "https://randomuser.me/api/portraits/men/70.jpg"
  }
]


  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">
        Customer Testimonials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={item.avatar}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover border"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>

                <div className="flex text-yellow-500 text-sm">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Review Text */}
            <p className="text-gray-600 leading-relaxed">
              {item.review}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerTestimonials;
