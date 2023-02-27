

import SideBar from './components/Sidebar';
import Main from './components/Main';
import MediaPlayer from './components/MediaPlayer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <SideBar/>
      <Main/>
      <MediaPlayer/>
    </div>
  );
}

export default App;
