
import React, { useState, useEffect } from "react";


const WeddingCountdown = () => {
  const weddingDate = new Date("2025-04-26T00:00:00"); // Set the wedding date
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date();
    const difference = weddingDate - now;

    if (difference <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <div className="waiting">Մնաց</div>
      <div className="countdown">
        <div className="time-box">
          <span>{timeLeft.days}</span> 
          <p>Օր</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.hours}</span>
          <p>Ժամ</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.minutes}</span>
          <p>Րոպե</p>
        </div>
        <div className="time-box">
          <span>{timeLeft.seconds}</span>
          <p>Վայրկյան</p>
        </div>
      </div>
    </div>
  );
};

export default WeddingCountdown;
