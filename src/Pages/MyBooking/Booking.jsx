import { useLoaderData, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const Booking = () => {
  const car = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    _id,
    carName,
    image,
    rentPerDay,
    providerEmail,
    providerName
  } = car;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Auto Price Calculation
  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diff = (end - start) / (1000 * 3600 * 24);
    return diff > 0 ? diff : 0;
  };

  const totalDays = calculateDays();
  const totalPrice = totalDays * rentPerDay;

  // Handle Booking Submit
  const handleBooking = () => {
    if (!startDate || !endDate) {
      toast.error("Please select both start and end dates!");
      return;
    }

    if (totalDays <= 0) {
      toast.error("End date must be after start date.");
      return;
    }

    const bookingInfo = {
      carId: _id,
      carName,
      image,
      userEmail: user.email,
      providerEmail,
      providerName,
      startDate,
      endDate,
      totalPrice,
      status: "confirmed"
    };

    fetch("http://localhost:3000/bookings", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingInfo)
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Booking confirmed!");
        navigate("/my-bookings");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">

      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 text-center">Book Your Car</h2>

      {/* Car Preview */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={carName}
          className="w-40 h-28 object-cover rounded-md shadow"
        />
        <div>
          <h3 className="text-xl font-bold">{carName}</h3>
          <p className="text-gray-600">
            Rent Per Day: <span className="font-semibold">${rentPerDay}</span>
          </p>
          <p className="text-gray-600">
            Provider: {providerName} ({providerEmail})
          </p>
        </div>
      </div>

      {/* Date Inputs */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="font-semibold">Start Date</label>
          <input
            type="date"
            className="input input-bordered w-full"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </div>

        <div>
          <label className="font-semibold">End Date</label>
          <input
            type="date"
            className="input input-bordered w-full"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>
      </div>

      {/* Price Summary */}
      <div className="mt-6 p-4 bg-gray-100 rounded-lg">
        <p className="text-lg font-semibold">
          Total Days: <span className="text-blue-600">{totalDays}</span>
        </p>
        <p className="text-lg font-semibold">
          Total Price:{" "}
          <span className="text-green-600">${totalPrice || 0}</span>
        </p>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleBooking}
        className="btn btn-primary w-full mt-6 text-white"
      >
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;
