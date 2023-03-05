import {useEffect, useRef} from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";

// audio
import startLevelTheme from "../../assets/audios/startLevelTheme.mp3";
import startButtonSound from "../../assets/audios/start.mp3";

export const StartLevel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const startLevelThemeRef = useRef();
  const startButtonSoundRef = useRef();


  useEffect(() => {
    startLevelThemeRef.current.play();
  }, []);

  const levelText = {
    1: "know about me", 
    2: "explore my skills", 
    3: "explore my projects",
    4: "explore my work journey"
  }

  return (
    <div className="start-level-wrapper">
      <audio ref={startLevelThemeRef} src={startLevelTheme} loop />
      <audio ref={startButtonSoundRef} src={startButtonSound} />
      
      <h1 className="double-color">Level {id}</h1>  

      <h2>{levelText[id] ? levelText[id] : "level not found"}</h2>
      
      <button className="start-button" onClick={() => {
        startButtonSoundRef.current.volume = 0.2;
        startButtonSoundRef.current.play();
        startLevelThemeRef.current.volume = 0.3;

        setTimeout(
          () => levelText[id] ? 
          navigate("/") : 
          navigate("/", {replace: true}), 1000);
      }}>
        <span className="double-color">
          {levelText[id] ? "start" : "back"}
        </span>
      </button>
    </div>
  );
};
