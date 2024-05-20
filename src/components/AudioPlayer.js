import React, { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import styled from "styled-components";

const AudioPlayerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
`;

const PlayPauseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
`;

const ProgressContainer = styled.div`
  flex: 1;
  height: 5px;
  background: #ddd;
  border-radius: 5px;
  position: relative;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  height: 100%;
  background: #66ff33;
  width: ${(props) => props.progress}%;
  border-radius: 5px;
`;

const Time = styled.div`
  font-size: 0.8rem;
  min-width: 50px;
`;

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const AudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("timeupdate", handleTimeUpdate);
      audio.addEventListener("loadedmetadata", handleMetadata);
      return () => {
        audio.removeEventListener("timeupdate", handleTimeUpdate);
        audio.removeEventListener("loadedmetadata", handleMetadata);
      };
    }
  }, []);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    const progress = (audio.currentTime / audio.duration) * 100;
    setProgress(progress);
    setCurrentTime(audio.currentTime);
  };

  const handleMetadata = () => {
    const audio = audioRef.current;
    setDuration(audio.duration);
  };

  const handleProgressClick = (e) => {
    const progressContainer = e.currentTarget;
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const progress = (clickX / rect.width) * 100;
    const newTime = (progress / 100) * duration;
    audioRef.current.currentTime = newTime;
    setProgress(progress);
  };

  return (
    <AudioPlayerContainer>
      <PlayPauseButton onClick={handlePlayPause}>
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </PlayPauseButton>
      <ProgressContainer onClick={handleProgressClick}>
        <ProgressBar progress={progress} />
      </ProgressContainer>
      <Time>{formatTime(currentTime)}</Time>
      <Time>{formatTime(duration)}</Time>
      <audio ref={audioRef} src={src} />
    </AudioPlayerContainer>
  );
};

export default AudioPlayer;
