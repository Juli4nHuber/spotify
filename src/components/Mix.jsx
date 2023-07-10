import { useEffect } from "react";
import "../styles/mix.scss"
export default function Mix({name, image, anio, tipo}){

    return (
    <div className="flex flex-col bg-neutral-800 w-full p-4 rounded-lg">
        <img className="rounded-md" src={ image }/>
        <div className="mix-text text-slate-400 py-4">
            <h5 className="font-bold whitespace-nowrap text-ellipsis text-white overflow-hidden">{name}</h5>
            <p className="text-slate-400 text-sm mt-1">{anio} - {tipo}</p>
        </div>
    </div>
    );
}

