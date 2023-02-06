import React from "react";
import { Track } from "../../services/ItunesApi";

export interface ResultProps {
  result: Track;
}

export const Result: React.FC<ResultProps> = ({ result }) => (
  <div>
    <img src={result.artworkUrl60} alt={result.trackName} />
    <h2>{result.trackName}</h2>
    <p>{result.artistName}</p>
  </div>
);

export default Result;
