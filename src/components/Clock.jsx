import React, { useState, useEffect } from 'react';
import moment from 'moment';

export default function Clock() {
  const timeFormat = 'h:mm';
  const dateFormat = 'dddd, MMMM Do';
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  
  return (
    <div className="clock">
      <div className={'time'}>
        {moment(currentTime).format(timeFormat)}
      </div>
        
      <div className="date">
        {moment(currentTime).format(dateFormat)}
      </div>
    </div>
  );
};