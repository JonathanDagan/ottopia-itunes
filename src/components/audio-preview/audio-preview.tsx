import React, { useState, useRef, useEffect } from 'react';
import {MdOutlinePlayCircleFilled, MdOutlinePauseCircleFilled} from 'react-icons/md';

import styles from './audio-preview.module.scss';

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
      setProgress((e.target as HTMLAudioElement).currentTime / (e.target as HTMLAudioElement).duration);
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
    <div className={styles['container']}>
      <audio ref={audioRef} src={src} />
      <div className={styles['loader']}>
        <div
          style={{
            height: '100%',
            width: `${progress * 100}%`,
            borderRadius: '100px 0 0 100px',
            background: '#333',
            position: 'absolute',
            left: 0,
            top: 0
          }}
        />
      </div>
      <div className={styles['playPause']} onClick={togglePlay}>{isPlaying ? <MdOutlinePauseCircleFilled /> : <MdOutlinePlayCircleFilled />}</div>
    </div>
  );
};

