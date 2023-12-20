/**
 * The `GoogleSignin` component is a React component that renders a Google Sign-In button and handles
 * the authentication process using the Google Sign-In API.
 * @returns The component is returning a `<div>` element containing a button with a ref to
 * `googleButton`.
 */
import axios from "axios";
import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { user_google } from "../../store/actions/userActions";
import apiUrl from "../../api";

const GoogleSignin = () => {

    const googleButton = useRef();
    const dispatch = useDispatch();
    const handleCredentialResponse = async (response) => {
        const data = {token_id: response.credential}
        const userResponse = await axios.post(`${apiUrl}/auth/google`, data)
            .catch(error => {
                console.error('Error making the POST request:', error);
            });
        console.log('User response from server:', userResponse.data);
        dispatch(user_google(userResponse.data.response))
    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                // client_id: import.meta.env.VITE_APP_GOOGLE_CLIENT_ID,
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