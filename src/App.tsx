import { Routes, Route } from "react-router-dom";

import "./App.css";

import { LandingPage } from "./routes/landing-page/landing-page";
import { SearchView } from "./routes/search-view/search-view";
import { TrackPage } from "./routes/track-page/track-page";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element={<SearchView />}></Route>
        <Route path="/track/:id" element={<TrackPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
