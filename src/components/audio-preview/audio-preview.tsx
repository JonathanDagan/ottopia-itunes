import React, { useState, useRef, useEffect } from "react";

import {
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
} from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

import styles from "./audio-preview.module.scss";

export interface AudioPreviewProps {
  src: string;
}

export const AudioPreview: React.FC<AudioPreviewProps> = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) {
      return;
    }

    audioEl.ontimeupdate = (e) => {
      setProgress(
        (e.target as HTMLAudioElement).currentTime /
          (e.target as HTMLAudioElement).duration
      );
    };
  }, []);

  const togglePlay = () => {
    const audioEl = audioRef.current;
    if (!audioEl) {
      return;
    }

    if (isPlaying) {
      audioEl.pause();
    } else {
      audioEl.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className={styles["container"]}>
      <audio ref={audioRef} src={src} />
      <div className={styles["loader"]}>
        <CircularProgressbar value={progress * 100} strokeWidth={8} styles={buildStyles({pathColor: "black"})}/>
      </div>
      <div className={styles["playPause"]} onClick={togglePlay}>
        {isPlaying ? (
          <MdOutlinePauseCircleFilled />
        ) : (
          <MdOutlinePlayCircleFilled />
        )}
      </div>
    </div>
  );
};
