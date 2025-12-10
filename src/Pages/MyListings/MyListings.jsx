import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

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
    <div className="max-w-5xl mx-auto p-5">
      <h2 className="text-3xl font-bold text-center mb-6">My Listings</h2>

      <div className="overflow-x-auto shadow-lg bg-white rounded-lg">
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
              cars.map((car) => (
                <tr key={car._id}>
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
                      className="btn btn-sm btn-info text-white"
                    >
                      Update
                    </Link>

                    <button
                      className="btn btn-sm btn-error text-white"
                      onClick={() => handleDelete(car._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyListings;
