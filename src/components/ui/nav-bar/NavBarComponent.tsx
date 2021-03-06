import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {ButtonLinkComponent} from "./button-link/ButtonLinkComponent";
import * as _ from "lodash";
import {getIDUrl} from "../../../helpers/url-helper";
import {useFetch} from "../../../hooks/useFetch";


export const NavBarComponent = () => {

    const refMenu = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        refMenu.current?.classList.toggle("sm:hidden");
    }

    const {loading, data}: any = useFetch('type');

    return (
        <nav className="flex items-center justify-between flex-wrap bg-red-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link className="font-semibold text-xl tracking-tight" to="/">Heroes App</Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border rounded text-red-200 border-red-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow sm:hidden lg:block sm:h-40 lg:h-auto sm:overflow-y-auto"
                     ref={refMenu}>
                    {loading && <ButtonLinkComponent name="Loading..." customClass={['mr-4']} location="#"/>}
                    {
                        data && data.results.map((type: any, index: number) => {
                            return <ButtonLinkComponent name={_.capitalize(type.name)} customClass={['mr-4']}
                                                        key={index}
                                                        location={`/dashboard/pokemon/type/${getIDUrl(type.url)}`}/>
                        })
                    }
                    <ButtonLinkComponent name="Logout" location="/" customClass={['lg:hidden', 'sm:block']}/>
                </div>
            </div>
            <div className="sm:hidden lg:block">
                <ButtonLinkComponent name="Logout" location="/"/>
            </div>
        </nav>
    )
}
