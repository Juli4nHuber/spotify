import React from "react";
import SongPic from '../images/song.jpg'

export default function MediaPlayer(){
    return(
        <div className="flex fixed border-t border-gray-600 bottom-0 h-20 w-full bg-gray-700 p-2">
            <img src={ SongPic }/>
            <div id="song-info" className="flex flex-col text-white self-center p-2">
                <h1 id="song-name" className="text-sm font-semibold">Ella</h1>
                <label className="text-xs text-slate-300">Tan Bionica</label>
            </div>
        </div>
    );
}