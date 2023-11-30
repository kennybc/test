"use client";

import { useRef, useState, useEffect, useCallback } from "react";

const useSound = (path: string) => {
  const audio = useRef<HTMLAudioElement>();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audio.current = new Audio(path);
    audio.current.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.current?.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  useEffect(() => {
    playing ? audio.current?.play() : audio.current?.pause();
  }, [playing]);

  const play = useCallback(() => {
    setPlaying(true);
  }, []);

  return [play];
};

export default useSound;
