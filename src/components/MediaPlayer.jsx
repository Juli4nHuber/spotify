import React, { useLayoutEffect } from "react";
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faImage } from "@fortawesome/free-regular-svg-icons";
import { faMicrophoneLines, faMobileScreen, faList, faVolumeOff, faVolumeXmark, faVolumeLow, faVolumeHigh, faUpRightAndDownLeftFromCenter, faShuffle, faBackwardStep, faPlayCircle, faPauseCircle, faForwardStep, faRotateRight, } from "@fortawesome/free-solid-svg-icons";
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider'
import Song from '../audio/ellatanbionica.mp3'

import '../styles/mediaplayer.scss';

export default function MediaPlayer(){

    const audioElem = useRef();
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(25);
    const [isMute, setIsMute] = useState(false);

    useEffect(() => {
        if(audioElem){
            audioElem.current.volume = volume / 100;
        } 

        if(isPlaying){
            const auxDuration = audioElem.current.duration;
            setDuration(auxDuration);

            //Cada
            setInterval(() => {
            const auxCurrentTime = audioElem.current.currentTime;
            setCurrentTime(auxCurrentTime);
            }, 100)
        }

    },[volume, isPlaying]);

    const toggleCurrentTime = (time) =>{
        audioElem.current.currentTime = time;
        setCurrentTime(time);
    }

    const formatTime = (time) => {
        if(time && !isNaN(time)){
            const dMinutes = Math.floor(time / 60);
            const dSeconds = Math.floor(time - dMinutes * 60);
            if(dSeconds < 10)
                return `${dMinutes}:0${dSeconds}`;
            return `${dMinutes}:${dSeconds}`;
        }
        return "0:00";  
    }
    
    const togglePlay = () => {
        if (isPlaying){
            audioElem.current.pause();
        }
        else{
            audioElem.current.play();
        }
        setIsPlaying(!isPlaying);
    };


    const toggleMute = () => {
        if (!isMute){
            audioElem.current.muted = !isMute;
        }
        else{
            audioElem.current.muted = !isMute;
        }
        setIsMute(!isMute);
    } 

    const audioEnded = () => {
        audioElem.current.currentTime = 0;
        setCurrentTime(0);
        setIsPlaying(false);
    }
    
    return(
        <div id="mediaPlayer" className="flex h-20 w-full border-t justify-between border-neutral-700 bottom-0 bg-neutral-900 p-3">
            <audio src={Song} ref={audioElem} muted={isMute} onEnded={() => audioEnded()}/>

            {/* Esta es la informacion que de la cancion que esta a la izquierda */}

            <div className="flex w-1/6">
                <img className="cursor-pointer" src={ require("../images/song.jpg")}/>
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
                    <div className="w-[25px] mb-[4px]">
                        <label className="text-xs font-semibold">{formatTime(currentTime)}</label>
                    </div>
                    <Box sx={{ display: 'flex', width: "100%", marginInline: "10px" }}>
                        <Slider
                            className='text-slate-300'
                            boxShadow="0"
                            size="medium"
                            onChange={(e, v) => toggleCurrentTime(v)}
                            value={currentTime}
                            max={duration}
                            sx = {{
                                '&:hover': {
                                    '.MuiSlider-track': {
                                        color: "#1DB954",
                                    },
                                    '.MuiSlider-thumb': {
                                        boxShadow: 0,
                                        width: "12px",
                                        height: "12px",
                                    }                   
                                },
                                '& .MuiSlider-track':{
                                    transition: 'none'
                                },
                                '& .MuiSlider-thumb': { 
                                    borderRadius: '100%',
                                    boxShadow: 0,
                                    width: 0,
                                    height: 0,
                                    transition: 'none',
                                    '&:hover': {
                                        boxShadow: 0,
                                        width: "12px",
                                        height: "12px",
                                    },
                                    '&.Mui-focusVisible': {
                                        boxShadow: 0,
                                    },
                                },
                            }}
                        />
                    </Box>
                    <div className="block w-[25px] mb-[4px]">
                        <label className="text-xs font-semibold">{formatTime(duration)}</label>
                    </div>             
                </div>
                
            </div>

            {/* Estas son las opciones y el volumen de la derecha */}

            <div className="flex w-1/6 items-center justify-between text-slate-400 ">
                <FontAwesomeIcon className="hover:text-white cursor-pointer mr-2" icon={ faMicrophoneLines }/>
                <FontAwesomeIcon className="hover:text-white cursor-pointer mr-2" icon={ faList }/>
                <FontAwesomeIcon className="hover:text-white cursor-pointer mr-2" icon={ faMobileScreen }/>
                {/* Caja volumen */}
                <div className="flex items-center w-auto mr-3">
                    <div className="w-[18px]">
                    {!isMute 
                        ? volume <= 25 
                            ? <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={ faVolumeOff } onClick= {toggleMute}/>
                            : volume <= 75 
                                ? <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={ faVolumeLow } onClick= {toggleMute}/>
                                : <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={ faVolumeHigh } onClick= {toggleMute}/>
                        : <FontAwesomeIcon className="hover:text-white cursor-pointer" icon={ faVolumeXmark } onClick= {toggleMute}/>
                    }
                    </div>
                    <Box sx={{ display: 'flex', width: '100px', ml: "0.75rem" }}>
                    <Slider
                            className='text-slate-300'
                            boxShadow="0"
                            size="medium"
                            defaultValue={25}
                            onChange={function(e , v){setVolume(v); setIsMute(false);}}
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