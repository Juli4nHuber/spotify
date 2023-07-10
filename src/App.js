import SideBar from './components/Sidebar';
import Main from './components/Main';
import MediaPlayer from './components/MediaPlayer';
import './App.scss';
import { useEffect, useState } from 'react';
import querystring from "querystring-es3";
import { Url } from 'url';
import { Buffer } from 'buffer';

function App() {

  const [accessToken, setAccessToken] = useState("");

  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

  function login(){
    window.location.href = 'https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: CLIENT_ID,
      redirect_uri: 'http://localhost:3000',
      scope: 'user-read-private user-read-email'
    })

  }

  useEffect(() => {

    let myUrl = new URL(window.location.href);
    if(myUrl.searchParams.get('code') !== null){
      fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + (new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'))
        },
        body: querystring.stringify({
          grant_type: 'authorization_code',
          code: myUrl.searchParams.get('code'),
          redirect_uri: 'http://localhost:3000'
        })
      })
      .then(response => response.json())
      .then(data => setAccessToken(data.access_token))
    }
  }, [])

  return (
    (accessToken === "") 
    ?
    <div className="flex justify-center w-full h-screen bg-slate-900">
        <div className="my-auto">
            <button className="text-white bg-[#1DB951] hover:bg-[#11662e] rounded-lg p-2 font font-semibold" onClick={login}>Conectarse a Spotify</button>
        </div>
    </div>
    :
    <div className="flex flex-col h-screen overflow-hidden bg-black App">
       <div className="flex h-full overflow-hidden">
         <SideBar/>
         <Main accessToken={accessToken}/>
       </div>
       <MediaPlayer/>
    </div>
  )
}

export default App;
