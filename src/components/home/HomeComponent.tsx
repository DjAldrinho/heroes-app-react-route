import React from 'react';
import {useFetch} from "../../hooks/useFetch";

export const HomeComponent = () => {

    const {loading, data}: any = useFetch('pokemon');

    return (
        <div className="container mx-auto my-8">
            <h1 className="text-center text-blue-800 text-4xl font-semibold">All Pokemon's</h1>
            {
                loading
                    ?
                    (
                        <div
                            className="w-3/4 mx-auto my-8 bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-5 shadow-md"
                            role="alert">
                            <div className="flex">
                                <div className="py-1">
                                    <svg className="animate-spin fill-current h-6 w-6 text-red-500 mr-4"
                                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor"
                                                strokeWidth="4"/>
                                        <path className="opacity-75" fill="currentColor"
                                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-bold">Loading...</p>
                                </div>
                            </div>
                        </div>
                    )
                    :
                    (
                        <div className="my-8">
                            <div className="gap-4 grid grid-cols-5 place-items-stretch">
                                {
                                    data && data.results.map((result: any) => {
                                        return <div>{result.name}</div>
                                    })
                                }
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
