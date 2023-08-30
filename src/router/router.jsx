import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Home from "../pages/Home.jsx";
import Cities from "../pages/Cities.jsx";
import CityDetails from "../components/CityDetails/CityDetails.jsx";
import LogIn from "../components/LogIn/LogIn.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/cities',
                element: <Cities />
            },
            {
                path: '/stays',
                element: <Cities />
            },
            {
                path: '/car-rentals',
                element: <Cities />
            },
            {
                path: '/cities/:id',
                element: <CityDetails />
            },
            {
                path: '/login',
                element: <LogIn />
            }
        ]
    },
    {
        path: '/cities',
        element: <Cities />
    }
]);

export default router;