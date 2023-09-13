import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link as Anchor } from "react-router-dom";
import axios from "axios";
import { user_photo } from "../../store/actions/userActions";
import IconArrowIn from "../Icons/IconArrowIn/IconArrowIn";
import IconTargetBlank from "../Icons/IconTargetBlank/IconTargetBlank";

const SignUp = () => {

    const [countryData, setCountryData] = useState([]);

    useEffect(() => {
        const countries = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all?fields=name');
                setCountryData(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        countries();
    }, []);


    const dispatch = useDispatch();

    const handleSignUp = () => {
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
                    <h1 className="text-4xl font-medium">Sign Up</h1>
                    <p className="text-slate-500">Hi, Welcome 👋</p>

                    <div className="my-5">
                        <button className="w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-300 rounded-full text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
                            <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-6 h-6" alt="" /> <span>Register with Google</span>
                        </button>
                    </div>
                    <form action="" className="my-10">
                        <div className="flex flex-col space-y-5">
                            <label htmlFor="name">
                                <p className="font-medium text-slate-700 pb-2">Full name</p>
                                <input id="name" name="name" type="text" className="w-full py-3 border border-slate-300 rounded-full px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your name" />
                            </label>
                            <label htmlFor="email">
                                <p className="font-medium text-slate-700 pb-2">Email address</p>
                                <input id="email" name="email" type="email" className="w-full py-3 border border-slate-300 rounded-full px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter email address" />
                            </label>
                            <label htmlFor="password">
                                <p className="font-medium text-slate-700 pb-2">Password</p>
                                <input id="password" name="password" type="password" className="w-full py-3 border border-slate-300 rounded-full px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Enter your password" />
                            </label>
                            <label htmlFor="personalPhoto">
                                <p className="font-medium text-slate-700 pb-2">Select your avatar image (url format)</p>
                                <input id="personalPhoto" name="photo" type="text" className="w-full py-3 border border-slate-300 rounded-full px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Image URL" />
                            </label>
                            <label htmlFor="nationality">
                                <p className="font-medium text-slate-700 pb-2">Select your nationality</p>
                                <select id="nationality" name="nationality" className="w-full py-3 border border-slate-300 rounded-full px-3 focus:outline-none focus:border-slate-500 hover:shadow" placeholder="Select one...">
                                    <option value='' hidden>Select one...</option>
                                    {countryData?.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((country) => (
                                        <option key={country.name.common} value={country.name.common}>
                                            {country.name.common}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <button onClick={handleSignUp} className="w-full py-3 font-medium text-white bg-purple-600 hover:bg-purple-500 rounded-full border-purple-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                                <IconArrowIn />
                                <span>Sign Up</span>
                            </button>
                            <p className="text-center">Already registered? <Anchor to={'/signin'} className="text-purple-600 font-medium inline-flex space-x-1 items-center"><span>SignIn </span><span><IconTargetBlank /></span></Anchor></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp