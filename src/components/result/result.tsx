import React from "react";
import { Track } from "../../services/ItunesApi";

import { AudioPreview } from "../audio-preview/audio-preview";

import styles from "./result.module.scss";

export interface ResultProps {
  result: Track;
}

export const Result: React.FC<ResultProps> = ({ result }) => (
  <div className={styles["resultCard"]}>
    <img src={result.artworkUrl60} alt={result.trackName} />
    <div className={styles["trackAndArtist"]}>
            <a href={`/track/${result.trackId}`}>
                <h2>{result.trackName}</h2>
            </a>
      <p>{result.artistName}</p>
    </div>
    <AudioPreview src={result.previewUrl} />
  </div>
);

export default Result;
