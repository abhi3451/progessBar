import { useEffect, useState } from "react";
import "./styles.css";
const ProgressBar = ({ count = 0 }) => {
  const [percentage, setPercentage] = useState(count);
  useEffect(() => {
    setPercentage(Math.min(100, Math.max(count, 0)));
  }, [count]);
  return (
    <div className="progress">
      <span style={{ color: `${percentage < 50 ? "black" : "white"}` }}>
        {percentage}%
      </span>
      <div style={{ width: `${percentage}%` }} />
    </div>
  );
};
export default ProgressBar;
