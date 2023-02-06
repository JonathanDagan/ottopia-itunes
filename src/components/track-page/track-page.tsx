import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchTrackById, Track } from "../../services/ItunesApi";

export interface TrackPageProps {
  trackId: string;
}

export const TrackPage: React.FC<TrackPageProps> = () => {
  const { trackId } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const track = await fetchTrackById(Number(trackId));
      setData(track);
    };

    fetchData();
  }, []);

  return (
    <div>{data ? <div>{/* Render data */}</div> : <div>Loading...</div>}</div>
  );
};
