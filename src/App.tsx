import { Routes, Route, Link } from 'react-router-dom';

import "./App.css";

import { LandingPage } from './components/landing-page/landing-page';
import { SearchView } from './components/search-view/search-view';
import { TrackPage } from './components/track-page/track-page';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/search" element={<SearchView/>}></Route>
        <Route path="track:id" element={<TrackPage trackId=''/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
