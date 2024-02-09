import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function getTimeRemaining() {
    const targetDate = new Date('April 5, 2024 00:00:00 GMT+0000');
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;
  
    if (timeDifference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  
    // Format seconds with leading zero if needed
    const formattedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  
    return { days, hours, minutes, seconds: formattedSeconds };
  }
  

  return (
    <div>
      <p><b>{timeRemaining.days} Days {timeRemaining.hours} Hours  {timeRemaining.minutes} Minutes  {timeRemaining.seconds} Seconds</b></p>
    </div>
  );
};

export default CountdownTimer;
