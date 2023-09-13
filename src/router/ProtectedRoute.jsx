import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    let user = useSelector(store => store.userReducer.user);

    if(!user) {
        return children
    }

    return <Navigate to='/' />
}

export default ProtectedRoute