import React from "react";
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faImage } from "@fortawesome/free-regular-svg-icons";
import { faMicrophoneLines, faMobileScreen, faList, faVolumeOff, faUpRightAndDownLeftFromCenter, faShuffle, faBackwardStep, faPlayCircle, faPauseCircle, faForwardStep, faRotateRight, } from "@fortawesome/free-solid-svg-icons";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'
import Song from '../audio/ellatanbionica.mp3'

import '../styles/mediaplayer.scss';

export default function MediaPlayer(){

    const audioElem = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(25);
    const togglePlay = () => {
        if (isPlaying){
            audioElem.current.pause();
        }
        else{
            audioElem.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    const toggleVolume = (v) => {
        if(audioElem){
            audioElem.current.volume = v / 100;
        }
    }
    return(
        <div id="mediaPlayer" className="flex h-20 w-full border-t justify-between border-neutral-700 bottom-0 bg-neutral-900 p-3">
            <audio src={Song} ref={audioElem}/>

            {/* Esta es la informacion que de la cancion que esta a la izquierda */}

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

            {/* Esto es el reproductor del medio */}

            <div className="flex flex-col justify-between w-2/5 items-center">
                <div className="flex h-4/6 w-2/6 items-center justify-between text-slate-400">
                    <FontAwesomeIcon className="hover:text-white text-lg cursor-pointer" icon={ faShuffle }/>
                    <FontAwesomeIcon className="hover:text-white text-lg cursor-pointer" icon={ faBackwardStep }/>
                    {isPlaying
                        ? <FontAwesomeIcon className="hover:text-white text-3xl cursor-pointer" icon={ faPauseCircle } onClick={togglePlay}/>
                        : <FontAwesomeIcon className="hover:text-white text-3xl cursor-pointer" icon={ faPlayCircle } onClick={togglePlay}/>
                    }
                    <FontAwesomeIcon className="hover:text-white text-lg cursor-pointer" icon={ faForwardStep }/>
                    <FontAwesomeIcon className="hover:text-white text-lg cursor-pointer" icon={ faRotateRight }/>
                </div>
                <div className="flex h-1/6 w-full items-center text-slate-400">
                    <label className="text-xs font-semibold">0:00</label>
                    <Box sx={{ display: 'flex', width: "100%", marginInline: "1rem" }}>
                        <Slider
                            className='text-slate-300'
                            boxShadow="0"
                            size="medium"
                            defaultValue={0}
                            sx = {{
                                '&:hover': {
                                    '.MuiSlider-track': {
                                    color: "#1DB954" 
                                    },
                                    '.MuiSlider-thumb': {
                                        boxShadow: 0,
                                        width: "12px",
                                        height: "12px",
                                    }                   
                                },
                                '& .MuiSlider-thumb': { 
                                    borderRadius: '100%',
                                    boxShadow: 0,
                                    width: 0,
                                    height: 0,
                                    '&:hover': {
                                        boxShadow: 0,
                                        width: "12px",
                                        height: "12px",
                                    },
                                    '&.Mui-focusVisible': {
                                        boxShadow: 0
                                    },
                                },
                            }}
                        />
                    </Box>
                    <label className="text-xs font-semibold">3:30</label>
                </div>
                
            </div>

            {/* Estas son las opciones y el volumen de la derecha */}

            <div className="flex w-1/6 items-center justify-between text-slate-400 ">
                <FontAwesomeIcon className="hover:text-white cursor-pointer mr-2" icon={ faMicrophoneLines }/>
                <FontAwesomeIcon className="hover:text-white cursor-pointer mr-2" icon={ faList }/>
                <FontAwesomeIcon className="hover:text-white cursor-pointer mr-2" icon={ faMobileScreen }/>
                {/* Caja volumen */}
                <div className="flex items-center w-auto mr-3">
                    <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={ faVolumeOff }/>
                    <Box sx={{ display: 'flex', width: '100px', ml: "0.75rem" }}>
                    <Slider
                            className='text-slate-300'
                            boxShadow="0"
                            size="medium"
                            defaultValue={volume}
                            onChange={(e , v) => toggleVolume(v)}
                            min={0}
                            max={100}
                            sx = {{
                                width: "100%",
                                '&:hover': {
                                    '.MuiSlider-track': {
                                    color: "#1DB954" 
                                    },
                                    '.MuiSlider-thumb': {
                                        boxShadow: 0,
                                        width: "12px",
                                        height: "12px",
                                    }                   
                                },
                                '& .MuiSlider-thumb': { 
                                    borderRadius: '100%',
                                    boxShadow: 0,
                                    width: 0,
                                    height: 0,
                                    '&:hover': {
                                        boxShadow: 0,
                                        width: "12px",
                                        height: "12px",
                                    },
                                    '&.Mui-focusVisible': {
                                        boxShadow: 0
                                    },
                                },
                            }}
                        />
                    </Box>                
                </div>
                <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={ faUpRightAndDownLeftFromCenter }/>
            </div>

        </div>
    );
}