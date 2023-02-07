import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchTrackById, Track } from "../../services/ItunesApi";
import { formatMsToMMSS } from "../../utils";

import styles from "./track-page.module.scss";

export interface TrackPageProps {
  trackId?: number;
}

export const TrackPage: React.FC<TrackPageProps> = (props) => {
  const { id = props.trackId} = useParams();

  const [data, setData] = useState<Track | null>(null);

  useEffect(() => {
    if (!id) {
      console.log("No trackId"); //Todo: handle this with a 404 page
      return;
    }
    fetchTrackById(String(id))
      .then((track) => setData(track))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {data ? (
        <div>
          <img className={styles['albumArt']} src={data.artworkUrl100} alt={data.collectionName} />
          <h1>{data.trackName}</h1>
          <h2>By: {data.artistName}</h2>
          <div className={styles['extraData']}>
            <h3>{formatMsToMMSS(data.trackTimeMillis)}</h3>
            <h3>{data.primaryGenreName}</h3>
          </div>
        </div>
      ) : (
        <div>Loading...</div> // Todo: switch to a loading component
      )}
    </div>
  );
};
