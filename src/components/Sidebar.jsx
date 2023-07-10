import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/spotifyLogo.png'
import {faBookOpen, faPlus, faHeart, faMagnifyingGlass, faHouse } from "@fortawesome/free-solid-svg-icons";
import '../styles/sidebar.scss'
import "../styles/main.scss"

export default function SideBar(){
    return (
        <div className="w-[300px] p-7 bg-black text-slate-300">
            <div className="h-auto">
                <img className="w-full" src={ logo }/>
            </div>
            <ul className="mt-6">
                <li className="hover:text-white cursor-pointer flex flex-row font-semibold" >
                    <div className="text-white sidebar-icon"><FontAwesomeIcon icon={faHouse}/></div>
                    <div className="text-white ml-3">Inicio</div>
                </li>
                <li className="hover:text-white cursor-pointer flex flex-row font-semibold mt-2">
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faMagnifyingGlass}/></div>
                    <div className="ml-3">Buscar</div>
                </li>
                <li className="hover:text-white cursor-pointer flex flex-row font-semibold mt-2">
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faBookOpen}/></div>
                    <div className="ml-3">Tu biblioteca</div>
                </li>
            </ul>
            <ul className="mt-7">
                <li className="hover:text-white cursor-pointer flex flex-row font-semibold">
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faPlus}/></div>
                    <div className="ml-3">Crear lista</div>
                </li>
                <li className="hover:text-white cursor-pointer flex flex-row font-semibold mt-2">
                    <div className="sidebar-icon"><FontAwesomeIcon icon={faHeart}/></div>
                    <div className="ml-3">Canciones que te gustan</div>
                </li>
            </ul>
            <div className="border-t border-slate-700 mt-2"></div>
        </div>
    );
}
