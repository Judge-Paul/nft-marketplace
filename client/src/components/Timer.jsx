import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Timer({ bidButton, hour }) {
  const [timeLeft, setTimeLeft] = useState({
    hours: hour,
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
    <div className="w-full bg-[#3B3B3B] p-6 rounded-2xl">
        <p className="mb-3">Auction ends in:</p>
        <div className={`text-4xl font-bold flex justify-center lg:`}>
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
        </div>
        {bidButton && <motion.button 
          className="mt-7 w-full py-4 bg-[#A259FF] rounded-2xl font-semibold"
          whileHover={{ scale: 0.92 }}
          >
          Place Bid
        </motion.button>}
    </div>
  );
}

export default Timer;
