import React from "react";
import { Track } from "../../services/ItunesApi";

import { AudioPreview } from "../audio-preview/audio-preview";
import { formatMsToMMSS } from "../../utils";

import { Link } from "react-router-dom";

import styles from "./result.module.scss";
import AudioPreview_module from '../audio-preview/audio-preview.module.scss';

export interface ResultProps {
    result: Track;
}

export const Result: React.FC<ResultProps> = ({ result }) => (
    <div className={styles["resultCard"]}>
        <img src={result.artworkUrl60} alt={result.trackName} loading='lazy' />
        <div className={styles["trackAndArtist"]}>
            <Link to={`/track/${result.trackId}`}>
                <h2><span>{result.trackName}</span></h2>
            </Link>
            <p>{result.artistName}</p>
            <div className={styles["songLength"]}>
                {formatMsToMMSS(result.trackTimeMillis)}
            </div>
        </div>
        <div className={`${styles.audioPreviewContainer} ${AudioPreview_module.container}`}>
            <AudioPreview src={result.previewUrl} />
        </div>
    </div>
);
