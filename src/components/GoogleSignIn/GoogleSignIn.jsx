import axios from "axios";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { user_google } from "../../store/actions/userActions";

const GoogleSignin = () => {

    const googleButton = useRef();

    const dispatch = useDispatch();

    const handleCredentialResponse = async (response) => {
        console.info(response.credential)

        const data = {token_id: response.credential}

        const userResponse = await axios.post('http://localhost:3000/api/auth/google', data)
            .catch(error => {
                console.error('Error making the POST request:', error);
            });

        console.log('User response from server:', userResponse.data);

        dispatch(user_google(userResponse.data.response))
    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "135761522316-ka4v3tg0l74hi32e98vgqmhim552ipqu.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                {
                    type: "standard",
                    shape: "pill",
                    theme: "outline",
                    text: "signin_with",
                    size: "large",
                    locale: "en",
                    logo_alignment: "center",
                }
            );
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="my-5 flex justify-center">
            <button ref={googleButton} ></button>
        </div>
    )
}
export default GoogleSignin