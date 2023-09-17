import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    let user = useSelector(store => store.userReducer.user);
    const navigate = useNavigate();

    if(!user) {
        return children
    }

    return navigate(-1)
}

export default ProtectedRoute