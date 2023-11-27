import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link as Anchor } from "react-router-dom";
import { user_signin } from "../store/actions/userActions.js";
import IconArrowIn from "../components/Icons/IconArrowIn/IconArrowIn.jsx";
import IconTargetBlank from "../components/Icons/IconTargetBlank/IconTargetBlank.jsx";
import GoogleSignIn from "../components/GoogleSignIn/GoogleSignIn.jsx"

const SignIn = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    }, []);

    const dispatch = useDispatch();

    const handleInput = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            dispatch(user_signin({
                data: formData
            }));
        } catch (error) {
            console.error;
        }
    };

    setTimeout(() => {}, 1000);

    return (
        // <div className="bg-purple-100 bg-gradient-to-r from-purple-200 py-16">
        <div className="img-cover">
            <div className=" bg-black bg-opacity-20 py-16">
                <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-400">
                    <h1 className="text-4xl font-medium">SignIn</h1>
                    <p className="text-slate-500">Hi, Welcome back 👋</p>

                    <GoogleSignIn />
                    <form onSubmit={handleSignIn} action="" className="my-10">
                        <div className="flex flex-col space-y-5">
                            <label htmlFor="email">
                                <p className="font-medium text-slate-700 pb-2">Email address</p>
                                <input
                                    onChange={handleInput}
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="w-full py-3 border border-slate-300 rounded-full px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    placeholder="Enter email address"
                                />
                            </label>
                            <label htmlFor="password">
                                <p className="font-medium text-slate-700 pb-2">Password</p>
                                <input
                                    onChange={handleInput}
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="w-full py-3 border border-slate-300 rounded-full px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                    placeholder="Enter your password"
                                />
                            </label>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <label htmlFor="remember" className="">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            className="w-4 h-4 border-slate-200 focus:bg-purple-600 me-1"
                                        />
                                        Remember me
                                    </label>
                                </div>
                                <div>
                                    <a href="#" className="font-medium text-purple-600">Forgot Password?</a>
                                </div>
                            </div>
                            <button onClick={handleSignIn} className="w-full py-3 font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-full border-purple-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                <IconArrowIn />
                                <span>SignIn</span>
                            </button>
                            <p className="text-center">Not registered yet? <Anchor to={'/signup'} className="text-purple-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><IconTargetBlank /></span></Anchor></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignIn