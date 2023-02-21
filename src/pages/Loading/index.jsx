import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export const Loading = () => {
  const [loadingPoints, setLoadingPoints] = useState(['.']);

  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPoints(prev => [...prev, '.']);
      }, 250);

    setTimeout(() => {
      clearInterval(interval);
      navigate("/", {replace: true});
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
