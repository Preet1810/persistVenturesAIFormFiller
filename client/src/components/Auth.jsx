import { useState } from 'react';
import axios from 'axios'
import { useDispatch } from "react-redux";
import { setLogin } from "../state/index";
import config from '../config'
const Auth=() => {
    const [isLogin, setIsLogin]=useState(true); // Whether the user is currently on the login or register form
    const dispatch=useDispatch();

    const [formData, setFormData]=useState({
        email: '',
        password: '',
    });

    const handleFormChange=(e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegister=async (e) => {
        // setLoad(true)
        e.preventDefault();
        try {
            await axios.post(`${config.API_BASE_URL}/auth/register`, formData)
                .then((response) => {
                    console.log(response)
                    dispatch(
                        setLogin({
                            user: response.data.savedUser,
                            token: response.data.token
                        })
                    );
                    // setLoad(false)
                })

        } catch (err) {
            // setLoad(false)
            console.log(err)
        }
    };


    const handleLogin=async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${config.API_BASE_URL}/auth/login`, formData)
                .then((response) => {
                    console.log(response)
                    dispatch(
                        setLogin({
                            user: response.data.user,
                            token: response.data.token
                        })
                    );
                    // setLoad(false)
                })
        } catch (err) {
            console.log(err)
            // setLoad(false)
            // setError(err.response.data.msg)
        }
    };


    const switchForm=() => {
        setIsLogin(!isLogin);
        setFormData({
            email: '',
            password: '',
        });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8 bg-slate-100 p-4">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        {isLogin? 'Sign in to your account':'Create an account'}
                    </h2>
                </div>
                <form className="mt-8" onSubmit={isLogin? handleLogin:handleRegister}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div className='mb-3'>
                            <label htmlFor="email-address" className="">
                                Email address
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className=''>
                            <label htmlFor="password" className="">
                                Password
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleFormChange}
                            />
                        </div>
                        <div className='py-4 flex justify-center'>
                            <button
                                type="submit"
                                className=" group relative w-2/4 flex justify-center py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >{isLogin? "Login":"Register"}</button>
                        </div>
                        <p className='py-3'>
                            {isLogin? "Don't have an account yet? ":'Already have an account? '}
                            <button
                                type="submit"
                                className="text-indigo-600"
                                onClick={switchForm}
                            >{isLogin? "Register":"Login"}</button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Auth;