import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Playlist from "./Playlist";
import Mix from "./Mix"
import "../styles/main.scss"
import Input from '@mui/base/Input';

export default function Main(props){

    const [accessToken, setAccessToken] = useState(props.accessToken);
    const [searchInput, setSearchInput] = useState("");
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
        
        if(searchInput && accessToken){
            var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', searchParameters)
            .then(response => response.json())
            .then(data => { return data.artists.items[0].id});

            await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums?include_groups=album&market=US&limit=50', searchParameters)
            .then(response => response.json())
            .then(data => {
                setAlbums(data.items);
            })
        }
        else{
            setAlbums("");
        }

    }, [searchInput])

    return (
        <div className="flex w-full flex-col">
            <div className="flex w-full bg-[#121212] h-16 py-1 px-8 items-center">
                <div className="flex items-center">
                    <div className="flex rounded-full hover:bg-black bg-[#0A0A0A] w-8 h-8 cursor-pointer">
                        <FontAwesomeIcon className="m-auto text-slate-300" icon={ faAngleLeft }/>
                    </div>
                    <div className="flex rounded-full hover:bg-black bg-[#0A0A0A] ml-2 w-8 h-8 cursor-pointer">
                        <FontAwesomeIcon className="m-auto text-slate-300" icon={ faAngleRight }/>
                    </div>
                    
                </div>
                <div class="flex h-full justify-self-start">
                    <Input
                        slotProps={{
                            input: {
                            className:
                                'w-80 h-full text-sm font-normal text-white leading-5 px-3 rounded-2xl focus:shadow-sm border border-solid border-[#242424] hover:border-[#414141] focus:border-2 focus:border-white bg-[#242424] focus-visible:outline-none ml-2',
                            },
                        }}
                        aria-label="Demo input"
                        placeholder="¿Qué quieres escuchar?"
                        onChange={event => setSearchInput(event.target.value)}
                    />
                </div>

                <div className="flex absolute right-0 mr-2 justify-self-end text-white font-semibold bg-black rounded-full p-1 items-center text-sm h-8 cursor-pointer hover:bg-neutral-700">
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
                            if(album.images[0].url)
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