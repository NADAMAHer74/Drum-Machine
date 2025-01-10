import React, { useEffect, useRef } from "react";

const DrumPad = ({ clip, updateDisplay }) => {
  const audioRef = useRef(null); // Reference to the audio element

  const handlePlay = () => {
    const audio = audioRef.current;
    audio.currentTime = 0; // Rewind to the start
    audio.play();
    updateDisplay(clip.id);
  };

  const handleKeyPress = (event) => {
    if (event.key.toUpperCase() === clip.key) {
      handlePlay();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <div
      className=" col-md-3 col-4 drum-pad btn btn-primary bg-gradient opacity-75  p-5"
      id={clip.id}
      onClick={handlePlay}
    >
      {clip.key}
      <audio
        ref={audioRef}
        className="clip"
        id={clip.key}
        src={clip.src}
      ></audio>
    </div>
  );
};

export default DrumPad;
