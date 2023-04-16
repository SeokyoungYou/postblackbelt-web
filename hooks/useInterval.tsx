import React from "react";

const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = React.useRef(callback);

  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (delay == null) {
      return;
    }

    const timeId = setInterval(() => savedCallback.current(), delay);

    // eslint-disable-next-line consistent-return
    return () => clearInterval(timeId);
  }, [delay]);
};

export default useInterval;
