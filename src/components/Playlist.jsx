import React from "react";

export default function Playlist(props){
    return(
        <div className="flex h-[80px] w-full bg-gray-700 rounded-md overflow-hidden">
            <img className="" src={props.image} alt="..."/>
            <div className="flex items-center">
                <h1 className="px-4 font-bold text-white">{props.name}</h1>
            </div>
        </div>
    );
}