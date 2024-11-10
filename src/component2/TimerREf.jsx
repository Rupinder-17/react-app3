import React from "react";
import { useEffect } from "react";

export const TimerREf = () => {
  const [timer, setTimer] = React.useState(0);
  const timeRef = React.useRef();

  const starttime = () => {
    timeRef.current = setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    starttime();
    return () => {
      clearInterval(timeRef.current);
    };
  }, []);
  return (
    <div className="text-center space-y-4">
      <p className="text-2xl font-medium py-2 bg-red-800 text-white">
        use Ref Time{" "}
      </p>
      <h1 className="text-3xl font-mono ">Timer: {timer}</h1>
      <button
        onClick={() => {
          clearInterval(timeRef.current);
        }}
        className="bg-red-700 text-white px-3 rounded font-semibold text-xl py-2"
      >
        Stop
      </button>
      <button
        className="bg-red-700 text-white px-3 rounded font-semibold text-xl py-2"
        onClick={starttime}
      >
        Start
      </button>
    </div>
  );
};
