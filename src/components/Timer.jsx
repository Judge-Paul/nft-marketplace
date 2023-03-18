import React, { useState, useEffect } from "react";

function Timer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 24,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        clearTimeout(timer);
        return;
      }

      if (timeLeft.minutes === 0 && timeLeft.seconds === 0) {
        setTimeLeft({
          hours: timeLeft.hours - 1,
          minutes: 59,
          seconds: 59,
        });
      } else if (timeLeft.seconds === 0) {
        setTimeLeft({
          hours: timeLeft.hours,
          minutes: timeLeft.minutes - 1,
          seconds: 59,
        });
      } else {
        setTimeLeft({
          hours: timeLeft.hours,
          minutes: timeLeft.minutes,
          seconds: timeLeft.seconds - 1,
        });
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="bg-[#3B3B3B] p-6 rounded-2xl opacity-75">
        <p className="mb-3">Auction ends in:</p>
        <h1 className="text-5xl font-bold flex">
            <div className="pr-4">
                {timeLeft.hours.toString().padStart(2, "0")}{" "}:
                <p className="text-sm font-light">Hours</p>
            </div>
            <div className="pr-4">
                {timeLeft.minutes.toString().padStart(2, "0")}{" "}:
                <p className="text-sm font-light">Minutes</p>
            </div>
            <div>
                {timeLeft.seconds.toString().padStart(2, "0")}
                <p className="text-sm font-light">Seconds</p>
            </div>
        </h1>
    </div>
  );
}

export default Timer;
