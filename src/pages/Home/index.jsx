import { useRef, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AudioContext } from "../../contexts/AudioContext";
import "./styles.css";

// icons
import facebookIcon from "../../assets/images/socialMedias/facebook.svg";
import instagramIcon from "../../assets/images/socialMedias/instagram.svg";
import linkedinIcon from "../../assets/images/socialMedias/linkedin.svg";
import arrowIcon from "../../assets/images/arrow.svg";

// audio
import themeAudio from "../../assets/audios/homeTheme.mp3"
import startButtonSound from "../../assets/audios/start.mp3";

export const Home = () => {
  const themeAudioRef = useRef();
  const startButtonSoundRef = useRef();

  const navigate = useNavigate();

  const { sound, setSound } = useContext(AudioContext);

  useEffect(() => {
    if (!sound) navigate("hint");

    if (sound) themeAudioRef.current.play();
  }, []);

  return (
    <div className="home-wrapper">
      <audio ref={themeAudioRef} src={themeAudio} loop />
      <audio ref={startButtonSoundRef} src={startButtonSound} />
      <header>
        <h1 className="title">
          <span className="double-color">welcome</span>
          <span className="double-color">player1</span>
        </h1>
        <p className="indicative-text">press start to <br/>enter story mode</p>        
      </header>

      <main>
      <img className="arrow" src={arrowIcon} alt="arrow"/>        
        <button className="start-button" onClick={() => {
          themeAudioRef.current.volume = 0.3
          startButtonSoundRef.current.volume = 0.2;
          startButtonSoundRef.current.play();
          
          setTimeout(() => navigate("loading"), 1000);
        }}>
          <span className="double-color">start</span>
        </button>
      </main>

      <footer>
        <strong>
          follow me at
        </strong>
        <div className="social-medias">
          <img src={facebookIcon} alt="facebook"/>
          <img src={instagramIcon} alt="instagram"/>
          <img src={linkedinIcon} alt="linkedin"/>
        </div>
      </footer>
    </div>
  );
};
