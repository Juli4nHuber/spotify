import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Playlist from "./Playlist";
import Mix from "./Mix"

export default function Main(){
    return (
        <div className="flex flex-col w-full bg-neutral-800 overflow-y-auto">
                <div className="flex top-0 left-0 relative w-full bg-neutral-800 justify-between h-16 py-4 px-8">
                    <div className="flex">
                        <div className="flex rounded-full hover:bg-black bg-neutral-900 w-8 cursor-pointer">
                            <FontAwesomeIcon className="m-auto text-slate-300" icon={ faAngleLeft }/>
                        </div>
                        <div className="flex rounded-full hover:bg-black bg-neutral-900 ml-2 w-8 cursor-pointer">
                            <FontAwesomeIcon className="m-auto text-slate-300" icon={ faAngleRight }/>
                        </div>
                    </div>
                    
                    <div className="flex text-white font-semibold bg-black rounded-full p-1 items-center text-sm h-8 cursor-pointer hover:bg-neutral-700">
                        <img className="w-6 mr-2 rounded-full" src={ require("../images/profile.jpg") }/>
                        Juli4nG4briel
                        <FontAwesomeIcon className="mx-2" icon={ faCaretDown }/>
                    </div>
                </div>
                <div className="bg-neutral-800 p-8 pt-4 overflow-auto ">
                    <h1 className="text-white text-3xl font-bold">Buenos días</h1>
                    <div className="grid grid-cols-2  lg:grid-cols-3 gap-4 py-4">
                        <Playlist name="reputation" image={ require("../images/playlists/reputation.jpg")}></Playlist>
                        <Playlist name="Voicenotes" image={ require("../images/playlists/voicenotes.jpg")}></Playlist>
                        <Playlist name="Cabildo y Juramento " image={ require("../images/playlists/cabildoyjuramento.jpg")}></Playlist>
                        <Playlist name="2030" image={ require("../images/playlists/2030.jpg")}></Playlist>
                        <Playlist name="Hola Mundo" image={ require("../images/playlists/holamundo.jpg")}></Playlist>
                        <Playlist name="Balas Perdidas" image={ require("../images/playlists/balasperdidas.jpg")}></Playlist>
                    </div>
                    <h1 className="text-white text-2xl font-bold ">Tus mixes más escuchados</h1>
                    <div className="flex grid-cols-3 h-auto lg:grid-cols-5 gap-4 pt-4">
                        <Mix name="Taylor Swift" image={ require("../images/mixs/taylorswift.jpg")}/>
                        <Mix name="Charlie Puth" image={ require("../images/mixs/charlieputh.jpg")}/>
                        <Mix name="Tan Bionica " image={ require("../images/mixs/tanbionica.jpg")}/>
                        <Mix name="Morat" image={ require("../images/mixs/morat.jpg")}/>
                        <Mix name="Conociendo Rusia" image={ require("../images/mixs/conociendorusia.jpg")}/>
                    </div>
                </div>
        </div>
    );
}