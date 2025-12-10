import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import BrowseCars from "../Pages/BrowseCars/BrowseCars";
import AddCar from "../Pages/AddCar/AddCar";
import MyListings from "../Pages/MyListings/MyListings";
import MyBooking from "../Pages/MyBooking/MyBooking";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import PrivateRoute from "./PrivateRoute";
import CarDetails from "../Componets/CarDetails/CarDetails";
import Booking from "../Pages/MyBooking/Booking";
import UpdateMyListing from "../Componets/UpdateMyListings/UpdateMyListings";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/browse_cars',
                loader: () => fetch('http://localhost:3000/cars'),
                element: <BrowseCars></BrowseCars>
            },
            {
                path: '/add_car',
                element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
            },
            {
                path: '/my_listings',
                element: <PrivateRoute><MyListings></MyListings></PrivateRoute>
            },
            {
                path: '/my_bookings',
                element: <PrivateRoute><MyBooking></MyBooking></PrivateRoute>
            },
            {
                path: '/car_details/:id',
                element: <CarDetails></CarDetails>
            },
            {
                path: "/booking/:id",
                element: <Booking />,
                loader: ({ params }) =>
                    fetch(`http://localhost:3000/cars/${params.id}`)
            },
            {
                path: "/update-car/:id",
                element: <UpdateMyListing></UpdateMyListing>,
                loader: ({ params }) => fetch(`http://localhost:3000/cars/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    },

])



export default router;