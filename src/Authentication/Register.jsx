import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const Register = () => {
    const navigate = useNavigate();
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        setError("");

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        const uppercase = /[A-Z]/;
        const lowercase = /[a-z]/;

        if (!uppercase.test(password)) {
            return setError("Password must contain at least one uppercase letter.");
        }

        if (!lowercase.test(password)) {
            return setError("Password must contain at least one lowercase letter.");
        }

        if (password.length < 6) {
            return setError("Password must be at least 6 characters long.");
        }

        createUser(email, password)
            .then((result) => {
                const user = result.user;

                updateProfile(user, {
                    displayName: name,
                    photoURL: photoURL,
                })
                    .then(() => {
                        if (auth.currentUser) {
                            auth.currentUser.displayName = name;
                            auth.currentUser.photoURL = photoURL;
                        }

                        toast.success("Account created successfully!");
                        navigate("/");
                    })
                    .catch((err) => {
                        console.log(err);
                        setError("Profile update failed.");
                    });
            })
            .catch((err) => {
                console.log(err);
                setError("Failed to create account.");
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Create an Account
                </h2>

                {error && <p className="text-red-600 text-sm mb-3 text-center">{error}</p>}

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Full Name</label>
                        <input type="text" name="name" className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Email</label>
                        <input type="email" name="email" className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Photo URL</label>
                        <input type="text" name="photoURL" className="input input-bordered w-full" required />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Password</label>
                        <input type="password" name="password" className="input input-bordered w-full" required />
                    </div>

                    <button className="btn btn-primary w-full text-white">Register</button>
                </form>

                <div className="text-center mt-6 text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
