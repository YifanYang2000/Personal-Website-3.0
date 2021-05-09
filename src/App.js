import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/fixed/navbar';
import Player from './components/fixed/spotifyplayer';
import Intro from './components/intro/intro';

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
