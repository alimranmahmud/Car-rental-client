import { useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateMyListing = () => {
  const car = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    carName,
    description,
    category,
    rentPerDay,
    location,
    image,
    providerName,
    providerEmail
  } = car;

  const handleUpdateCar = (e) => {
    e.preventDefault();
    const form = e.target;

    const updatedCar = {
      carName: form.carName.value,
      description: form.description.value,
      category: form.category.value,
      rentPerDay: parseFloat(form.rentPerDay.value),
      location: form.location.value,
      image: form.image.value,
      providerName,
      providerEmail,
    };

    fetch(`https://car-rental-server-pink-sigma.vercel.app/cars/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedCar)
    })
      .then((res) => res.json())
      .then(() => {
        toast.success("Car updated successfully!");
        navigate("/browse_cars");
      })
      .catch((err) => {
        //console.log.log.error(err);
        toast.error("Update failed!");
      });
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold text-center mb-6">
        Update Car Information
      </h2>

      <form onSubmit={handleUpdateCar} className="space-y-4">

        <div>
          <label className="font-semibold">Car Name</label>
          <input
            type="text"
            name="carName"
            defaultValue={carName}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            defaultValue={description}
            className="textarea textarea-bordered w-full"
            required
          ></textarea>
        </div>

        <div>
          <label className="font-semibold">Category</label>
          <select
            name="category"
            defaultValue={category}
            className="select select-bordered w-full"
            required
          >
            <option>Sedan</option>
            <option>SUV</option>
            <option>Hatchback</option>
            <option>Luxury</option>
            <option>Electric</option>
          </select>
        </div>

        <div>
          <label className="font-semibold">Rent Per Day ($)</label>
          <input
            type="number"
            name="rentPerDay"
            defaultValue={rentPerDay}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Location</label>
          <input
            type="text"
            name="location"
            defaultValue={location}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Image URL</label>
          <input
            type="text"
            name="image"
            defaultValue={image}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="font-semibold">Provider Name</label>
          <input
            type="text"
            value={providerName}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <div>
          <label className="font-semibold">Provider Email</label>
          <input
            type="text"
            value={providerEmail}
            readOnly
            className="input input-bordered w-full bg-gray-100"
          />
        </div>

        <button className="btn btn-primary w-full mt-4 text-white">
          Update Car
        </button>
      </form>
    </div>
  );
};

export default UpdateMyListing;
