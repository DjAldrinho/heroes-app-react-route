import React, {useEffect, useState} from 'react';
import {ButtonLinkComponent} from "../ui/nav-bar/button-link/ButtonLinkComponent";
import * as _ from "lodash";
import {getIDUrl} from "../../helpers/url-helper";
import {useFetch} from "../../hooks/useFetch";

export const HomeComponent = () => {

    const {loading, data}: any = useFetch('pokemon', 18, 18);

    const initialValue: any = [];

    const [dataPokemon, setDataPokemon] = useState(initialValue);

    const initialPagination = {next: null, previous: null, count: 0};

    const [pagination, setPagination] = useState(initialPagination);

    useEffect(() => {
        getDataPokemon();
    }, [data]);

    const getDataPokemon = () => {

        setPagination({
            next: data?.next,
            previous: data?.previous,
            count: data?.count
        });

        data?.results.forEach((pokemon: any) => {
            fetch(pokemon.url)
                .then(resp => resp.json())
                .then(({id, name, weight, height, sprites, types}: any) => {
                    const infoPokemon: any = {
                        id,
                        name,
                        weight,
                        height,
                        sprites,
                        types
                    };
                    setDataPokemon((oldData: any) => [
                        ...oldData,
                        infoPokemon
                    ])
                });
        });
    }


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
                            <div className="gap-4 grid grid-cols-3 place-items-stretch">
                                {
                                    dataPokemon && dataPokemon.map((pokemon: any, index: number) => {
                                        return (
                                            <div key={index}
                                                 className="w-full border-b-4 border-red-500 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-300 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center">
                                                <div
                                                    className="border-b-2 border-blue-800 w-full flex flex-col justify-center items-center mb-3">
                                                    <img
                                                        className="object-center object-fill w-40 h-40 rounded-full mb-1"
                                                        src={pokemon.sprites.other.dream_world.front_default}
                                                        alt={pokemon.name}/>

                                                    <div className="text-center">
                                                        <p className="text-xl text-blue-800 uppercase font-semibold mb-2">{pokemon.name}</p>
                                                    </div>
                                                </div>
                                                <div className="gap-4 grid grid-cols-3 grid-flow-col w-full  h-20">
                                                    <div
                                                        className="flex flex-col items-center border-r-2 justify-center border-red-500">
                                                        <h3 className="text-red-500 uppercase font-bold">Height</h3>
                                                        <p className="text-base font-semibold text-black">{pokemon.height} (dm)</p>
                                                    </div>
                                                    <div
                                                        className="flex flex-col items-center border-r-2 justify-center border-red-500">
                                                        <h3 className="text-red-500 uppercase font-bold">weight</h3>
                                                        <p className="text-base font-semibold text-black">{pokemon.weight} (hg)</p>
                                                    </div>
                                                    <div className="flex flex-col items-center justify-center">
                                                        <h3 className="text-red-500 uppercase font-bold">Types</h3>
                                                        <div className="flex text-base font-semibold mt-1">{
                                                            pokemon.types.map(({type}: any, index2: number) => {
                                                                return <ButtonLinkComponent
                                                                    name={_.capitalize(type.name)}
                                                                    customClass={['mr-2', 'bg-red-800', 'rounded-full', 'px-3', 'text-xs']}
                                                                    key={index2}
                                                                    location={`/dashboard/pokemon/type/${getIDUrl(type.url)}`}/>
                                                            })
                                                        }</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                {JSON.stringify(pagination)}
                            </div>
                        </div>
                    )
            }
        </div>
    )
}
