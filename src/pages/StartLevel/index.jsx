import { useNavigate, useParams } from "react-router-dom";
import "./styles.css";

export const StartLevel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const levelText = {
    1: "know about me", 
    2: "explore my skills", 
    3: "explore my projects",
    4: "explore my work journey"
  }

  return (
    <div className="start-level-wrapper">
      <h1 className="double-color">Level {id}</h1>  
      <h2>{levelText[id] ? levelText[id] : "level not found"}</h2>
      <button onClick={() => {
        levelText[id] ? console.log("right") : navigate("/", {replace: true});
      }}>
        <span className="double-color">
          {levelText[id] ? "start" : "back"}
        </span>
      </button>
    </div>
  );
};
