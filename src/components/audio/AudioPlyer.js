import React, { useState, useEffect, useRef } from "react";

export default function Audioplyer() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const { title, artist, color, image, audioSrc } = tracks[trackIndex];
  return <div>Audioplyer</div>;
}
