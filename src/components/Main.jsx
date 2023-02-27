import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import profilePic from '../images/profile.jpg'

export default function Main(){
    return (
        <div className="flex ml-64 h-screen bg-gray-800">
                <div className="flex h-16 p-4">
                    <div className="flex rounded-full hover:bg-black bg-gray-900 w-8 cursor-pointer">
                        <FontAwesomeIcon className="m-auto text-slate-300" icon={ faAngleLeft }/>
                    </div>
                    <div className="flex rounded-full hover:bg-black bg-gray-900 ml-2 w-8 cursor-pointer">
                        <FontAwesomeIcon className="m-auto text-slate-300" icon={ faAngleRight }/>
                    </div>
                    <div className="flex fixed right-0 text-white font-semibold bg-gray-900 rounded-full p-1 mr-4 items-center text-sm h-8 cursor-pointer hover:bg-gray-700">
                        <img className="w-6 mr-2 rounded-full" src={ profilePic }/>
                        Juli4nG4briel
                        <FontAwesomeIcon className="mx-2" icon={ faCaretDown }/>
                    </div>
                </div>
        </div>
    );
}