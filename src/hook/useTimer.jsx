import React, { useEffect, useState, useRef } from "react";

const useTimer = ({ initValue = 0 }) => {
  const [value, setValue] = useState(initValue);
  const ref = useRef(null);

  const startTimer = () => {
    if (!ref.current) {
      ref.current = setInterval(() => {
        setValue((prev) => {
          if (prev - 1 == 0) {
            pauseTimer();
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  const pauseTimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };
  const resetTimer = () => {
    pauseTimer();
    setValue(initValue);
  };

  return { value, pauseTimer, resetTimer, startTimer };
};
export { useTimer };
