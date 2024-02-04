import { useEffect, useState } from "react";
import ProgressBar from "./Progress";

const App = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let timerId = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 300);
    return () => clearInterval(timerId);
  }, []);
  return <ProgressBar count={count} />;
};

export default App;
