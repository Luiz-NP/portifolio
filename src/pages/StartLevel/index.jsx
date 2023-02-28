import { useParams } from "react-router-dom";
import "./styles.css";

export const StartLevel = () => {
  
  const { id } = useParams();

  return (
    <div className="start-level-wrapper">
      <h1 className="double-color">Level {id}</h1>
      <h2>know about me</h2>
      <button>
        <span className="double-color">
          start
        </span>
      </button>
    </div>
  );
};
