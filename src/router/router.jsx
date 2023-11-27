import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main.jsx";
import Home from "../pages/Home.jsx";
import Cities from "../pages/Cities.jsx";
import CityDetails from "../pages/CityDetails.jsx";
import ItineraryDetails from "../pages/ItineraryDetails.jsx";
import SignIn from "../pages/SignIn.jsx";
import SignUp from "../pages/SignUp.jsx";
import HandleNotFound from "../components/HandleNotFound/HandleNotFound.jsx";
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
                element: <HandleNotFound />
            },
            {
                path: '/404',
                element: <HandleNotFound />
            },
        ]
    }
]);

export default router;