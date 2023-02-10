import "./styles.css";

// icons
import facebookIcon from "../../assets/images/socialMedias/facebook.svg";
import instagramIcon from "../../assets/images/socialMedias/instagram.svg";
import linkedinIcon from "../../assets/images/socialMedias/linkedin.svg";
import arrowIcon from "../../assets/images/arrow.svg";

export const Home = () => {
  return (
    <div className="wrapper">
      <header>
        <h1 className="title">
          <span className="double-color">welcome</span>
          <span className="double-color">player1</span>
        </h1>
        <p className="indicative-text">press play to <br/>enter story mode</p>        
      </header>

      <main>
      <img className="arrow" src={arrowIcon} alt="arrow"/>
        <button>
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
