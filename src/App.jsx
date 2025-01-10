import React, { useState } from "react";
import "./styles.css";
import DrumPad from "./DrumPad";

const audioClips = [
  {
    key: "Q",
    id: "Heater-1",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    id: "Heater-2",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    id: "Heater-3",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    id: "Heater-4",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    id: "Clap",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3",
  },
  {
    key: "D",
    id: "Open-HH",
    src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    id: "Kick-n-Hat",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    id: "Kick",
    src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    id: "Closed-HH",
    src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const App = () => {
  const [display, setDisplay] = useState("");

  const updateDisplay = (id) => setDisplay(id);

  return (
    <div id="drum-machine" className="container text-center mt-5">
      <h1 className="mb-4">Drum Machine</h1>
      <div
        id="display"
        className="mb-4 p-3 bg-dark text-light rounded  w-50   d-flex justify-content-center m-auto"
      >
        {display ? `${display}` : "Play a Sound"}
      </div>
      <div className="row justify-content-center gap-2">
        {audioClips.map((clip) => (
          <DrumPad key={clip.id} clip={clip} updateDisplay={updateDisplay} />
        ))}
      </div>
    </div>
  );
};

export default App;
