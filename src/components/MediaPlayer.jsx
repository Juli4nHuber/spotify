import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faImage } from "@fortawesome/free-regular-svg-icons";
import { faMicrophoneLines, faMobileScreen, faList, faVolumeOff, faUpRightAndDownLeftFromCenter, faShuffle, faBackwardStep, faPlayCircle, faForwardStep, faRotateRight, } from "@fortawesome/free-solid-svg-icons";
import '../styles/mediaplayer.scss';

export default function MediaPlayer(){
    return(
        <div className="flex fixed border-t justify-between border-neutral-800 bottom-0 h-20 w-full bg-neutral-900 p-3">
            <div className="flex w-1/6">
                <img className="cursor-pointer" src={ require("../images/song.jpg") }/>
                <div id="song-info" className="flex flex-col text-white self-center p-2">
                    <h1 id="song-name" className="text-sm font-semibold cursor-pointer">Ella</h1>
                    <label className="text-xs text-slate-400 hover:text-white underline-offset-1 cursor-pointer">Tan Bionica</label>
                </div>
                <div className="flex items-center justify-between w-12 text-slate-400 ml-5">
                    <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={ faHeart }/>
                    <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={ faImage }/>
                </div>
            </div>
            <div className="flex flex-col justify-between w-2/5 items-center">
                <div className="flex h-4/6 w-2/6 items-center justify-between text-slate-400">
                    <FontAwesomeIcon className="hover:text-white text-lg cursor-pointer" icon={ faShuffle }/>
                    <FontAwesomeIcon className="hover:text-white text-lg cursor-pointer" icon={ faBackwardStep }/>
                    <FontAwesomeIcon className="hover:text-white text-3xl cursor-pointer" icon={ faPlayCircle }/>
                    <FontAwesomeIcon className="hover:text-white text-lg cursor-pointer" icon={ faForwardStep }/>
                    <FontAwesomeIcon className="hover:text-white text-lg cursor-pointer" icon={ faRotateRight }/>
                </div>
                <div className="flex h-1/6 w-full items-center text-slate-400">
                    <label className="text-xs font-semibold">0:00</label>
                    <input className="flex hover:bg-green-600 bg-slate-400 h-1 w-full rounded-full cursor-pointer mx-3" type="range"/>
                    <label className="text-xs font-semibold">3:30</label>
                </div>
                
            </div>
            <div className="flex w-1/6 items-center justify-between text-slate-400 ">
                <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={ faMicrophoneLines }/>
                <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={ faList }/>
                <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={ faMobileScreen }/>
                <div className="flex items-center w-3/6">
                    <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={ faVolumeOff }/>
                    <input className="flex hover:bg-green-600 bg-slate-400 h-1 w-full rounded-full cursor-pointer ml-3" type="range"/>
                </div>
                <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={ faUpRightAndDownLeftFromCenter }/>
            </div>
        </div>
    );
}