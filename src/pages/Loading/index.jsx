import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Loading = () => {
  const navigate = useNavigate();

  const [loadingPoints, setLoadingPoints] = useState(['.']);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPoints(prev => [...prev, '.']);
      }, 250);

    setTimeout(() => {
      clearInterval(interval);
      navigate("/level/1", {replace: true});
    }, 2000)
  }, []);

  return (
    <div className="loading-wrapper">
      <div className="loading">
        <p className="double-color">initializing world</p>
        <div className="points">
            {loadingPoints.map((point, index) => (
            <span key={index}>{point}</span>
          ))}
        </div>
      </div>
    </div>
  );
};
