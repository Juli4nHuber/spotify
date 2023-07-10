import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Playlist from "./Playlist";
import Mix from "./Mix"
import "../styles/main.scss"


export default function Main(props){

    const [accessToken, setAccessToken] = useState(props.accessToken);
    const [albums, setAlbums] = useState("");
    const [user, setUser] = useState("");

    useEffect(() => async function(){
        let searchParameters = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
          }
        }

        if(user === "" && accessToken){
            await fetch('https://api.spotify.com/v1/me', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + accessToken
                }
            })
            .then(response => response.json())
            .then(data => {
                setUser(data);
            })
        }
    
        if(albums === "" && accessToken){
            var artistID = await fetch('https://api.spotify.com/v1/search?q=tan%20bionica&type=artist', searchParameters)
            .then(response => response.json())
            .then(data => { return data.artists.items[0].id});

            await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums?include_groups=album&market=US&limit=50', searchParameters)
            .then(response => response.json())
            .then(data => {
                setAlbums(data.items);
            })
        }
       
    })

    return (
        <div className="flex w-full flex-col">
            <div className="flex w-full bg-stone-900 justify-between h-16 py-4 px-8">
                <div className="flex">
                    <div className="flex rounded-full hover:bg-black bg-neutral-900 w-8 cursor-pointer">
                        <FontAwesomeIcon className="m-auto text-slate-300" icon={ faAngleLeft }/>
                    </div>
                    <div className="flex rounded-full hover:bg-black bg-neutral-900 ml-2 w-8 cursor-pointer">
                        <FontAwesomeIcon className="m-auto text-slate-300" icon={ faAngleRight }/>
                    </div>
                </div>
                <div className="flex text-white font-semibold bg-black rounded-full p-1 items-center text-sm h-8 cursor-pointer hover:bg-neutral-700">
                    {(user !== "") ? 
                    <>
                        <img className="w-6 mr-2 rounded-full" src={ user.images[0].url }/>
                        {user.display_name}
                        <FontAwesomeIcon className="mx-2" icon={ faCaretDown }/>
                    </>: ""
                    }
                </div>
            </div>
            <div className="bg-neutral-900 h-full p-8 pt-4 overflow-auto">
                <h1 className="text-white text-3xl font-bold">Buenos días</h1>
                
                <h1 className="text-white text-2xl font-bold ">Tus mixes más escuchados</h1>
                <div className="overflow-x-auto">
                    <div className="grid grid-cols-3 md:grid-cols-5 2xl:grid-cols-7 gap-4 pt-4">
                    {(albums !== "") 
                        ?
                        albums.map((album, i) => {
                            return(
                                <Mix key={album.id} name={album.name} image={album.images[0].url} anio={album.release_date} tipo={album.album_type}/>
                            )
                        })
                        : ""
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}