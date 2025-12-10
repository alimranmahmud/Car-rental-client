import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bookings/${user.email}`)
        .then((res) => res.json())
        .then((data) => setBookings(data))
        .catch((err) => console.log.log.error(err));
    }
  }, [user]);

  const handleCancel = (id) => {
    const confirmDelete = confirm("Are you sure you want to cancel this booking?");

    if (!confirmDelete) return;

    fetch(`http://localhost:3000/bookings/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (data.deletedCount > 0) {
          setBookings(bookings.filter((item) => item._id !== id));
          toast.success("Booking cancelled successfully!");
        }
      })
      .catch((err) => {
        //console.log.log.error(err);
        toast.error("Failed to cancel booking");
      });
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      
      <h2 className="text-3xl font-bold mb-6 text-center">My Bookings</h2>

      <div className="overflow-x-auto">
        <table className="table w-full">

          <thead className="bg-gray-200">
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
              bookings.map((item) => (
                <tr key={item._id}>
                  
                  <td className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.carName}
                      className="w-16 h-16 object-cover rounded-md shadow"
                    />
                    <div>
                      <p className="font-semibold">{item.carName}</p>
                    </div>
                  </td>

                  <td>
                    <p>From: {item.startDate}</p>
                    <p>To: {item.endDate}</p>
                  </td>

                  <td className="font-semibold">${item.totalPrice}</td>

                  <td>
                    <p>{item.providerName}</p>
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
                      className="btn btn-error btn-sm text-white"
                      onClick={() => handleCancel(item._id)}
                    >
                      Cancel
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

export default MyBookings;
