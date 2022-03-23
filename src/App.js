import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Characteristics from './pages/Characteristics';
import Favourites from './pages/Favourites';
import SingleFlower from './pages/SingleFlower';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path= "/" exact element={<Home />}/>
        <Route path= "/omadused" exact element={<Characteristics />} />
        <Route path= "/lemmikud" exact element={<Favourites />} />
        <Route path="/taim/:taimeNimetus" exact element={<SingleFlower />} />
      </Routes>

    </div>
  );
}

export default App;
