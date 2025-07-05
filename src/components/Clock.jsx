import React, { useState, useEffect } from 'react';

export default function Clock() {
  const timeFormat = { hour: 'numeric', minute: '2-digit', hour12: true };
  const dateFormat = { weekday: 'long', month: 'short', day: 'numeric' };
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update the current time every second
  setInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return (
    <div className="clock">
      <div className={'time'}>
        {currentTime.toLocaleString([], timeFormat)}
      </div>
        
      <div className="date">
        {currentTime.toLocaleDateString('en-US', dateFormat)} <br/>
      </div>
    </div>
  );
};