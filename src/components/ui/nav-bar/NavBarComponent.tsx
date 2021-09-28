import React, {useRef} from 'react';
import {Link} from "react-router-dom";
import {ButtonLinkComponent} from "./button-link/ButtonLinkComponent";


export const NavBarComponent = () => {

    const refMenu = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        refMenu.current?.classList.toggle("sm:hidden");
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-orange-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <Link className="font-semibold text-xl tracking-tight" to="/">Heroes App</Link>
            </div>
            <div className="block lg:hidden">
                <button onClick={toggleMenu}
                        className="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow sm:hidden lg:block" ref={refMenu}>
                    <ButtonLinkComponent name="Marvel" customClass={['mr-4']} location="/marvel"/>
                    <ButtonLinkComponent name="Dc" customClass={['mr-4']} location="/dc"/>
                    <ButtonLinkComponent name="Anime" customClass={['mr-4']} location="/anime"/>
                    <ButtonLinkComponent name="Logout" location="/" customClass={['lg:hidden', 'sm:block']}/>
                </div>
            </div>
            <div className="sm:hidden lg:block">
                <ButtonLinkComponent name="Logout" location="/"/>
            </div>
        </nav>
    )
}
