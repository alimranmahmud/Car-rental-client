
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthContext";

const AddCar = () => {
  const { user } = useContext(AuthContext);


  const handleAddCar = (e) => {
    e.preventDefault();

    const form = e.target;

    const carData = {
      carName: form.carName.value,
      description: form.description.value,
      category: form.category.value,
      rentPerDay: parseInt(form.rentPerDay.value),
      location: form.location.value,
      image: form.image.value,
      providerName: user?.displayName,
      providerEmail: user?.email,
      status: "available",
      user:0
    };

    //console.log.log.log("Car Added:", carData);

    fetch("http://localhost:3000/cars", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(carData)
    })
      .then(res => res.json())
      .then(data => {
        toast.success("Car Added Successfully!");
        form.reset();
      })
      .catch(err => {
        //console.log.log.error(err);
        toast.error("Failed to add car!");
      });
  };

  return (
    <div className="max-w-2xl mx-auto my-10 bg-white p-8 shadow-lg rounded-xl">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
        Add a New Car
      </h2>

      <form onSubmit={handleAddCar} className="space-y-4">
        
        
        <div>
          <label className="font-semibold">Car Name</label>
          <input
            type="text"
            name="carName"
            placeholder="car name"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            className="textarea textarea-bordered w-full"
            placeholder="Write car details..."
            required
          />
        </div>

        <div>
          <label className="font-semibold">Category</label>
          <select name="category" className="select select-bordered w-full" required>
            <option value="Sedan">Sedan</option>
            <option value="SUV" selected>SUV</option>
            <option value="Hatchback">Hatchback</option>
            <option value="Luxury">Luxury</option>
            <option value="Electric" selected>Electric</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Rent Price (per day)</label>
          <input
            type="number"
            name="rentPerDay"
            placeholder="price"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Location</label>
          <input
            type="text"
            name="location"
            placeholder=" location"
            className="input input-bordered w-full"
            required
            
          />
        </div>

        <div>
          <label className="font-semibold">Hosted Image URL</label>
          <input
            type="text"
            name="image"
            placeholder="Car Image URL"
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Provider Name</label>
          <input
            type="text"
            value={user?.displayName}
            className="input input-bordered w-full"
            readOnly
          />
        </div>

        <div>
          <label className="font-semibold">Provider Email</label>
          <input
            type="email"
            value={user?.email}
            className="input input-bordered w-full"
            readOnly
          />
        </div>

        <button className="btn btn-primary w-full text-white">
          Add Car
        </button>
      </form>
    </div>
  );
};

export default AddCar;
