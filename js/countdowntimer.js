function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.getElementById(id);
    const daysSpan = clock.querySelector('.days');
    const hoursSpan = clock.querySelector('.hours');
    const minutesSpan = clock.querySelector('.minutes');
    const secondsSpan = clock.querySelector('.seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = `${t.days} <sup>days</sup>`;
      hoursSpan.innerHTML = `${('0' + t.hours).slice(-2)} <sup>hours</sup>`;
      minutesSpan.innerHTML = `${('0' + t.minutes).slice(-2)} <sup>mins</sup>`;
      secondsSpan.innerHTML = `${('0' + t.seconds).slice(-2)} <sup>secs</sup>`;
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = 'March 18 2021 23:59:59 GMT+0200';
  initializeClock('counter', deadline);