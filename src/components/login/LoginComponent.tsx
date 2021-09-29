import React from 'react';
import './loginComponent.css';


export const LoginComponent = ({history}: any) => {

    const handleLogin = () => {
        history.replace("/dashboard");
    }

    return (
        <div className="lg:flex">
            <div className="lg:w-1/2 xl:max-w-screen-sm">
                <div className="py-12 bg-red-500 shadow-md flex justify-center lg:justify-start lg:px-12">
                    <div className="cursor-pointer flex items-center">
                        <div className="text-2xl text-white  tracking-wide font-semibold">Heroes APP</div>
                    </div>
                </div>
                <div className="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                    <h2 className="text-center text-4xl text-red-900 font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold">Log in</h2>
                    <div className="mt-12">
                        <form>
                            <div>
                                <div className="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                                <input
                                    className="w-full text-lg py-2 placeholder-red-200
                                    border-b border-gray-300 focus:outline-none focus:border-red-500"
                                    type="" placeholder="mike@gmail.com"/>
                            </div>
                            <div className="mt-8">
                                <div className="flex justify-between items-center">
                                    <div className="text-sm font-bold text-gray-700 tracking-wide">
                                        Password
                                    </div>
                                    <div>
                                        <div className="text-xs font-display font-semibold text-red-600 hover:text-red-800
                                        cursor-pointer">
                                            Forgot Password?
                                        </div>
                                    </div>
                                </div>
                                <input
                                    className="w-full text-lg py-2 placeholder-red-200
                                    border-b border-gray-300 focus:outline-none focus:border-red-500"
                                    type="" placeholder="Enter your password"/>
                            </div>
                            <div className="mt-10">
                                <button className="bg-red-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-red-600
                                shadow-lg" onClick={handleLogin}>
                                    Log In
                                </button>
                            </div>
                        </form>
                        <div className="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                            Don't have an account ? <span className="cursor-pointer text-red-600 hover:text-red-800">
                            Sign up
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex items-center justify-center background-hero flex-1 h-screen">
                <div className="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">

                </div>
            </div>
        </div>
    );
}
