import { useEffect, useRef } from "react";
import "./styles.css";

// icons
import facebookIcon from "../../assets/images/socialMedias/facebook.svg";
import instagramIcon from "../../assets/images/socialMedias/instagram.svg";
import linkedinIcon from "../../assets/images/socialMedias/linkedin.svg";
import arrowIcon from "../../assets/images/arrow.svg";

// audio
import themeAudio from "../../assets/audios/zelda.mp3"
import clickButtonAudio from "../../assets/audios/marioCoin.mp3";

export const Home = () => {
  const themeAudioRef = useRef();
  const clickButtonAudioRef = useRef();

  return (
    <div className="wrapper">
      <audio ref={themeAudioRef} src={themeAudio} loop />
      <audio ref={clickButtonAudioRef} src={clickButtonAudio} />
      <header>
        <h1 className="title">
          <span className="double-color">welcome</span>
          <span className="double-color">player1</span>
        </h1>
        <p className="indicative-text">press start to <br/>enter story mode</p>        
      </header>

      <main>
      <img className="arrow" src={arrowIcon} alt="arrow"/>
        <button onClick={() => {
          clickButtonAudioRef.current.play();
          // themeAudioRef.current.play();
        }}>
          <span className="double-color ">start</span>
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
