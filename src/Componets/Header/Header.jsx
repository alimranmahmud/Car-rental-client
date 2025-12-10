import { Link } from "react-router";
import { AuthContext } from "../../Context/AuthContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { FaCarSide, FaHome, FaListUl, FaPlusCircle, FaClipboardList } from "react-icons/fa";

const Header = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const links = (
        <>
            <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/"><FaHome /> Home</Link>
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/browse_cars"><FaCarSide /> Browse Cars</Link>
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/add_car"><FaPlusCircle /> Add Car</Link>
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/my_listings"><FaListUl /> My Listings</Link>
            </motion.li>

            <motion.li whileHover={{ scale: 1.1 }}>
                <Link to="/my_bookings"><FaClipboardList /> My Bookings</Link>
            </motion.li>
        </>
    );

    const handleSignOut = () => {
        signOutUser().catch(() => { });
    };

    return (
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="navbar bg-base-100 shadow-sm"
        >
            <div className="navbar-start mb-5 mt-2">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                    <ul tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-10">
                        {links}
                    </ul>
                </div>

                <motion.a
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="btn btn-ghost text-2xl font-bold flex items-center gap-2"
                >
                    <FaCarSide className="text-primary text-3xl" />
                    Car Rental
                </motion.a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img alt="profile" src={user?.photoURL} />
                            </div>
                        </div>

                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-3 shadow z-10 text-center"
                        >
                            <li className="font-bold">{user?.displayName}</li>
                            <li className="text-sm mb-2">{user?.email}</li>

                            <li>
                                <button onClick={handleSignOut} className="btn btn-primary w-full">
                                    Logout
                                </button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <Link to="/login" className="btn btn-primary">
                        Sign In
                    </Link>
                )}
            </div>
        </motion.div>
    );
};

export default Header;
