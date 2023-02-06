import React from "react";
import { Track } from "../../services/ItunesApi";

import styles from "./result.module.scss";

export interface ResultProps {
  result: Track;
}

export const Result: React.FC<ResultProps> = ({ result }) => (
  <div className={styles['resultCard']}>
    <img src={result.artworkUrl60} alt={result.trackName} />
    <h2>{result.trackName}</h2>
    <p>{result.artistName}</p>
  </div>
);

export default Result;
