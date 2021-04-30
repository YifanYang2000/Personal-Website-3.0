import './App.css';
import Navbar from './components/navbar';
import Player from './components/spotifyplayer';
import Intro from './components/intro';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Player/>
      <Intro/>
    </div>
  );
}

export default App;
