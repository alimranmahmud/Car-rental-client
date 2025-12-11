import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { FaTimesCircle, FaCheckCircle, FaCalendarAlt, FaCarSide, FaUser } from "react-icons/fa";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://car-rental-server-pink-sigma.vercel.app/bookings/${user.email}`)
        .then(res => res.json())
        .then(data => setBookings(data))
        .catch(err => console.error(err));
    }
  }, [user]);

  const handleCancel = (id) => {
    const confirmDelete = confirm("Are you sure you want to cancel this booking?");
    if (!confirmDelete) return;

    fetch(`https://car-rental-server-pink-sigma.vercel.app/bookings/${id}`, { method: "DELETE" })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          setBookings(bookings.filter(item => item._id !== id));
          toast.success("Booking cancelled successfully!");
        }
      })
      .catch(() => toast.error("Failed to cancel booking"));
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto mt-10 bg-white p-6 shadow-xl rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl font-bold mb-6 text-center flex justify-center items-center gap-2"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaCalendarAlt className="text-primary" /> My Bookings
      </motion.h2>

      <div className="hidden md:block overflow-x-auto">
        <table className="table w-full">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              <th>Car</th>
              <th>Booking Dates</th>
              <th>Total Price</th>
              <th>Provider</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  You have no bookings yet.
                </td>
              </tr>
            ) : (
              bookings.map((item, index) => (
                <motion.tr
                  key={item._id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-gray-50 transition"
                >
                  <td className="flex items-center gap-3">
                    <img src={item.image} className="w-16 h-16 object-cover rounded-md shadow" />
                    <p className="font-semibold">{item.carName}</p>
                  </td>

                  <td>
                    <p>From: {item.startDate}</p>
                    <p>To: {item.endDate}</p>
                  </td>

                  <td className="font-semibold">${item.totalPrice}</td>

                  <td>
                    <p><FaUser className="inline" /> {item.providerName}</p>
                    <p className="text-sm text-gray-500">{item.providerEmail}</p>
                  </td>

                  <td>
                    <span
                      className={`badge ${
                        item.status === "confirmed"
                          ? "badge-success"
                          : "badge-warning"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="btn btn-error btn-sm text-white flex items-center gap-1"
                      onClick={() => handleCancel(item._id)}
                    >
                      <FaTimesCircle /> Cancel
                    </button>
                  </td>
                </motion.tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="md:hidden grid grid-cols-1 gap-5 mt-5">
        {bookings.length === 0 ? (
          <p className="text-center text-gray-500">No bookings yet.</p>
        ) : (
          bookings.map((item, index) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1 }}
              className="border p-4 rounded-xl shadow-md"
            >
              <img src={item.image} className="w-full h-40 object-cover rounded-lg mb-3" />

              <h3 className="text-lg font-bold flex items-center gap-2">
                <FaCarSide /> {item.carName}
              </h3>

              <p className="mt-2"><strong>From:</strong> {item.startDate}</p>
              <p><strong>To:</strong> {item.endDate}</p>

              <p className="mt-2 font-semibold">Total: ${item.totalPrice}</p>

              <p className="mt-2 text-sm text-gray-600">
                Provider: {item.providerName} ({item.providerEmail})
              </p>

              <span
                className={`badge mt-2 ${
                  item.status === "confirmed"
                    ? "badge-success"
                    : "badge-warning"
                }`}
              >
                {item.status}
              </span>

              <button
                className="btn btn-error btn-sm w-full mt-3 text-white flex justify-center items-center gap-2"
                onClick={() => handleCancel(item._id)}
              >
                <FaTimesCircle /> Cancel Booking
              </button>
            </motion.div>
          ))
        )}
      </div>

    </motion.div>
  );
};

export default MyBookings;
