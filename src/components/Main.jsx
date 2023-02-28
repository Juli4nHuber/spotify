import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Playlist from "./Playlist";

export default function Main(){
    return (
        <div className="flex flex-col ml-64 mb-20 bg-gray-800">
                <div className="flex justify-between h-16 py-4 px-8">
                    <div className="flex">
                        <div className="flex rounded-full hover:bg-black bg-gray-900 w-8 cursor-pointer">
                            <FontAwesomeIcon className="m-auto text-slate-300" icon={ faAngleLeft }/>
                        </div>
                        <div className="flex rounded-full hover:bg-black bg-gray-900 ml-2 w-8 cursor-pointer">
                            <FontAwesomeIcon className="m-auto text-slate-300" icon={ faAngleRight }/>
                        </div>
                    </div>
                    
                    <div className="flex text-white font-semibold bg-gray-900 rounded-full p-1 items-center text-sm h-8 cursor-pointer hover:bg-gray-700">
                        <img className="w-6 mr-2 rounded-full" src={ require("../images/profile.jpg") }/>
                        Juli4nG4briel
                        <FontAwesomeIcon className="mx-2" icon={ faCaretDown }/>
                    </div>
                </div>
                <div className="flex flex-col bg-gray-800 w-full h-auto p-8 pt-4">
                    <h1 className="text-white text-3xl font-bold">Buenos días</h1>
                    <div className="grid grid-cols-2  lg:grid-cols-3 gap-4 w-full py-4">
                        <Playlist name="reputation" image={ require("../images/playlists/reputation.jpg")}></Playlist>
                        <Playlist name="Voicenotes" image={ require("../images/playlists/voicenotes.jpg")}></Playlist>
                        <Playlist name="Cabildo y Juramento " image={ require("../images/playlists/cabildoyjuramento.jpg")}></Playlist>
                        <Playlist name="2030" image={ require("../images/playlists/2030.jpg")}></Playlist>
                        <Playlist name="Hola Mundo" image={ require("../images/playlists/holamundo.jpg")}></Playlist>
                        <Playlist name="Balas Perdidas" image={ require("../images/playlists/balasperdidas.jpg")}></Playlist>
                    </div>
                    <h1 className="text-white text-2xl font-bold">Tus mixes más escuchados</h1>
                    <div className="flex pt-4">
                        <div className="flex flex-col bg-gray-700 w-[200px] h-[300px] rounded-lg overflow-hidden">
                            <img className="m-2 rounded-lg" src={ require("../images/playlists/reputation.jpg")}/>
                            <div className="text-slate-400 px-2">
                                <h5 className="font-bold text-white">Taylor Swift Mix</h5>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
}