import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import BrowseCars from "../Pages/BrowseCars/BrowseCars";
import AddCar from "../Pages/AddCar/AddCar";
import MyListings from "../Pages/MyListings/MyListings";
import MyBooking from "../Pages/MyBooking/MyBooking";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout></MainLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:'/browse_cars',
                element:<BrowseCars></BrowseCars>
            },
            {
                path:'/add_car',
                element:<AddCar></AddCar>
            },
            {
                path:'/my_listings',
                element:<MyListings></MyListings>
            },
            {
                path:'/my_bookings',
                element:<MyBooking></MyBooking>
            }
        ]
    },

])



export default router;