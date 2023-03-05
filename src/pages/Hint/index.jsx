import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AudioContext } from "../../contexts/AudioContext";
import "./styles.css";

// images
import soundOn from "../../assets/images/soundOn.svg";
import soundOff from "../../assets/images/soundOff.svg";

// audio
import soundSwitch from "../../assets/audios/soundSwitch.mp3";
import startButtonSound from "../../assets/audios/start.mp3";

export const Hint = () => {
  const soundIconRef = useRef();
  const startButtonSoundRef = useRef();
  const soundSwitchRef = useRef();

  const navigate = useNavigate()

  const { sound, setSound } = useContext(AudioContext);

  return (
    <div className="hint-wrapper">
      <audio ref={startButtonSoundRef} src={startButtonSound} />
      <audio ref={soundSwitchRef} src={soundSwitch} />
      <h1>
        <span className="double-color">this site has</span><br/>
        <span className="double-color">sound effects</span>
      </h1>
      <img onClick={() => {
        setSound(!sound);
        if (!sound) {
          soundSwitchRef.current.volume = 0.2;
          soundSwitchRef.current.play();
        } 
      }} ref={soundIconRef} src={sound ? soundOn : soundOff} />
      <button onClick={() => {
        if (sound) {
          startButtonSoundRef.current.volume = 0.2;
          startButtonSoundRef.current.play();
        }

        setTimeout(() => navigate("/"), 1000);
      }} className="start-button">
        <span className="double-color">start</span>
      </button>
    </div>
  );
};
