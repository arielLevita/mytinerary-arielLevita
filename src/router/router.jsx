import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Home from "../pages/Home.jsx";
import Cities from "../pages/Cities.jsx";
import CityDetails from "../components/CityDetails/CityDetails.jsx";
import ItineraryDetails from "../components/ItineraryDetails/ItineraryDetails.jsx";
import SignIn from "../components/SignIn/SignIn.jsx";
import SignUp from "../components/SignUp/SignUp.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";


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
                path: '/cities/:id',
                element: <CityDetails />
            },
            {
                path: '/itineraries/:id',
                element: <ItineraryDetails />
            },
            {
                path: '/signin',
                element: (<ProtectedRoute>
                            <SignIn />
                        </ProtectedRoute>)
            },
            {
                path: '/signup',
                element: (<ProtectedRoute>
                            <SignUp />
                        </ProtectedRoute>)
            },
            {
                path: '*',
                element: <h1 className="text-center text-3xl">This is an ERROR page</h1>
            },
            {
                path: '/404',
                element: <h1 className="text-center text-3xl">This is an ERROR page</h1>
            },
        ]
    },
    {
        path: '/cities',
        element: <Cities />
    }
]);

export default router;