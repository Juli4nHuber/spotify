

import SideBar from './components/Sidebar';
import Main from './components/Main';
import MediaPlayer from './components/MediaPlayer';
import './App.scss';

function App() {
  return (
    <div className="flex flex-col h-screen overflow-hidden bg-black App">
      <div className="flex h-full overflow-hidden">
        <SideBar/>
        <Main/>
      </div>
      <MediaPlayer/>
    </div>
  );  
}

export default App;
