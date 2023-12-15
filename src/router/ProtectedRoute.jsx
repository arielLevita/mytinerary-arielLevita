import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

/**
 * The ProtectedRoute component checks if there is a user logged in and either renders the children or
 * navigates back to the previous page.
 * @returns If the `user` is not defined, the `children` component is returned. Otherwise, the
 * `navigate(-1)` function is called.
 */
const ProtectedRoute = ({children}) => {
    let user = useSelector(store => store.userReducer.user);
    const navigate = useNavigate();

    if(!user) {
        return children
    }
    return navigate(-1)
}

export default ProtectedRoute