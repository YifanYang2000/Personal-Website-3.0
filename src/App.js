import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Player from './components/spotifyplayer';
import Intro from './components/intro';
import David from './components/scrollmagic/davidcarousel'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Player/>
      <Intro/>
      <David/>
    </div>
  );
}

export default App;
