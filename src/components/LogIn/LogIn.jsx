import { useDispatch } from "react-redux";
import { user_photo } from "../../store/actions/userActions";
import IconArrowIn from "../Icons/IconArrowIn/IconArrowIn";
import IconTargetBlank from "../Icons/IconTargetBlank/IconTargetBlank";

const LogIn = () => {

    const dispatch = useDispatch();

    const handleLogIn = () => {
        const user = {
            photo: 'https://i.postimg.cc/9Fm570dt/hans-gruber.jpg'
        }

        dispatch(user_photo(user));
    }

    return (
        // <div className="bg-purple-100 bg-gradient-to-r from-purple-200 py-16">
        <div className="img-cover">
            <div className=" bg-black bg-opacity-20 py-16">
                <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-400">
                    <h1 className="text-4xl font-medium">Login</h1>
                    <p className="text-slate-500">Hi, Welcome back 👋</p>

                    <div className="my-5">
                        <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-300 rounded-full text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Login with Google</span>
                        </button>
                    </div>
                    <form action="" className="my-10">
                        <div className="flex flex-col space-y-5">
                            <label htmlFor="email">
                                <p className="font-medium text-slate-700 pb-2">Email address</p>
                                <input id="email" name="email" type="email" className="w-full py-3 border border-slate-300 rounded-full px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                            </label>
                            <label htmlFor="password">
                                <p className="font-medium text-slate-700 pb-2">Password</p>
                                <input id="password" name="password" type="password" className="w-full py-3 border border-slate-300 rounded-full px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                            </label>
                            <div className="flex flex-row justify-between items-center">
                                <div>
                                    <label htmlFor="remember" className="">
                                        <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-purple-600 me-1" />
                                            Remember me
                                    </label>
                                </div>
                                <div>
                                    <a href="#" className="font-medium text-purple-600">Forgot Password?</a>
                                </div>
                            </div>
                            <button onClick={handleLogIn} className="w-full py-3 font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-full border-purple-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                <IconArrowIn />
                                <span>Login</span>
                            </button>
                            <p className="text-center">Not registered yet? <a href="#" className="text-purple-600 font-medium inline-flex space-x-1 items-center"><span>Register now </span><span><IconTargetBlank /></span></a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LogIn