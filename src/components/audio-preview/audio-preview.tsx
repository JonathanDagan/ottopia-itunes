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

  let styleProps = {
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,
  
    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',
  
    // Text size
    textSize: '16px',
  
    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,
  
    // Can specify path transition in more detail, or remove it entirely
    pathTransition: '',
  
    // Colors
    pathColor: `rgba(62, 152, 199, ${progress / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  }

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
