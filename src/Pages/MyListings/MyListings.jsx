import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaEdit, FaTrash, FaCarSide } from "react-icons/fa";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/cars/provider/${user.email}`)
        .then((res) => res.json())
        .then((data) => setCars(data))
        .catch((err) => console.error(err));
    }
  }, [user]);

  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this car?");
    if (!confirmDelete) return;

    fetch(`http://localhost:3000/cars/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          setCars(cars.filter((car) => car._id !== id));
          toast.success("Car deleted successfully!");
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <motion.div
      className="max-w-6xl mx-auto p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Title */}
      <motion.h2
        className="text-3xl font-bold text-center mb-6 flex justify-center items-center gap-2"
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <FaCarSide className="text-primary" /> My Listings
      </motion.h2>

      {/* Responsive Table Wrapper */}
      <motion.div
        className="bg-white rounded-xl shadow-xl overflow-hidden"
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Mobile Card View */}
        <div className="block md:hidden p-3 space-y-4">
          {cars.length === 0 ? (
            <p className="text-center py-6 text-gray-500">
              You haven't added any cars yet.
            </p>
          ) : (
            cars.map((car, index) => (
              <motion.div
                key={car._id}
                className="border rounded-lg p-4 shadow-sm"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="font-bold text-lg">{car.carName}</p>
                <p className="text-gray-600 text-sm">Category: {car.category}</p>
                <p className="text-gray-600 text-sm">Rent: ${car.rentPerDay}/day</p>

                <span
                  className={`badge mt-2 ${
                    car.status === "available"
                      ? "badge-success"
                      : "badge-warning"
                  }`}
                >
                  {car.status}
                </span>

                <div className="flex gap-3 mt-3">
                  <Link
                    to={`/update-car/${car._id}`}
                    className="btn btn-sm btn-info text-white flex items-center gap-1 w-1/2"
                  >
                    <FaEdit /> Update
                  </Link>

                  <button
                    className="btn btn-sm btn-error text-white flex items-center gap-1 w-1/2"
                    onClick={() => handleDelete(car._id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="table w-full">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th>Car Name</th>
                <th>Category</th>
                <th>Rent/Day</th>
                <th>Status</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {cars.length === 0 ? (
                <tr>
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    You haven't added any cars yet.
                  </td>
                </tr>
              ) : (
                cars.map((car, index) => (
                  <motion.tr
                    key={car._id}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1 }}
                    className="hover:bg-gray-50 transition"
                  >
                    <td className="font-semibold">{car.carName}</td>
                    <td>{car.category}</td>
                    <td>${car.rentPerDay}</td>
                    <td>
                      <span
                        className={`badge ${
                          car.status === "available"
                            ? "badge-success"
                            : "badge-warning"
                        }`}
                      >
                        {car.status}
                      </span>
                    </td>

                    <td className="flex gap-3 justify-center py-3">
                      <Link
                        to={`/update-car/${car._id}`}
                        className="btn btn-sm btn-info text-white flex items-center gap-1"
                      >
                        <FaEdit /> Update
                      </Link>

                      <button
                        className="btn btn-sm btn-error text-white flex items-center gap-1"
                        onClick={() => handleDelete(car._id)}
                      >
                        <FaTrash /> Delete
                      </button>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MyListings;
