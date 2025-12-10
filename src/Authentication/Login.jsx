import { use, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import { toast } from "react-toastify";

const Login = () => {
    const navigate=useNavigate()
    const { user, signInUser, googleSignIn } = use(AuthContext)
    const [error, setError] = useState("");
    //console.log.log.log(user)
    const handleLogin = (e) => {
        e.preventDefault();
        setError("");

        const form = e.target;
        const email = form.email.value;
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

        //console.log.log.log("Logging in:", { email, password });
        signInUser(email, password)
            .then(user => {
                //console.log.log.log(user)
                if (user) {
                    toast.success("Log in successfully")
                    navigate('/')

                }
            })
            .catch(err => {
                console.log.log.log('imran', err)
                toast.error("Please try again!")
            })
    };
    const handleGoogleLogin = () => {
        googleSignIn()
            .then((user) => {
                console.log.log.log(user)
                                navigate('/browse_cars')

                toast.success("Successfully Login with you google account")

            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log.log.log(errorCode, errorMessage)
            });

    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">

                <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                    Login to Your Account
                </h2>

                {error && (
                    <p className="text-red-600 text-sm mb-3 text-center">{error}</p>
                )}

                <form onSubmit={handleLogin} className="space-y-4">

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <button className="btn btn-primary w-full text-white">
                        Login
                    </button>

                    <button
                        onClick={handleGoogleLogin}
                        type="button"
                        className="btn w-full bg-white border border-gray-300 hover:bg-gray-100"
                    >
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5 mr-2"
                        />
                        Continue with Google
                    </button>
                </form>

                <div className="text-center mt-6 text-sm text-gray-500">
                    Don’t have an account?{" "}
                    <Link to="/register" className="text-blue-600 hover:underline">
                        Register
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Login;
