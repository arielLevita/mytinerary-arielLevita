import axios from "axios";
import { useRef } from "react";
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { user_google } from "../../store/actions/userActions";

export default function GoogleSignin() {

    const googleButton = useRef();
    const dispatch = useDispatch();

    const handleCredentialResponse = async (response) => {
        console.log(response.credential)
        const data = {
            token_id: response.credential
        }

        const userResponse = await axios.post('http://localhost:3000/api/auth/google', data)

        dispatch(user_google(userResponse.data.response))
    }

    useEffect(() => {
        if (window.google) {
            window.google.accounts.id.initialize({
                client_id: "536246484423-4lr3d8hfus0cn2fdljca5jnjqeb7teos.apps.googleusercontent.com",
                callback: handleCredentialResponse
            });
            window.google.accounts.id.renderButton(
                googleButton.current,
                {
                    /* type: "standard",
                    shape: "pill",
                    theme: "outline",
                    text: "signin_with",
                    size: "large",
                    locale: "en", */
                }
            );
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="my-5">
            <div></div>
            <button ref={googleButton} className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-300 rounded-full text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Login with Google</span>
            </button>
        </div>
    )
}