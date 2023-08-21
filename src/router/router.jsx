import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Home from "../pages/Home.jsx";
import Cities from "../pages/Cities.jsx";
import CityDetails from "../components/CityDetails/CityDetails.jsx";

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
            }
        ]
    },
    {
        path: '/cities',
        element: <Cities />
    }
]);

export default router;