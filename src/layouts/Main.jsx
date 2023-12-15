import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

/* The code is defining a functional component called `Main`. This component returns a JSX fragment
that includes a `Navbar` component, an `Outlet` component, and a `Footer` component. The `Outlet`
component is a placeholder for the child routes defined in the React Router configuration. */
const Main = () => {
    return (
        <>
            <Navbar />
                <Outlet />
            <Footer />
        </>
    )
}

export default Main