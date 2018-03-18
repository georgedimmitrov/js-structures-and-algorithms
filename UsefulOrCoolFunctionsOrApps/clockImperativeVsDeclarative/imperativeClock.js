// Not too bad of an approach, but each function does a lot and is harder to comprehend and debug

// Log Clock Time every Second
setInterval(logClockTime, 1000);

function logClockTime() {
  // Get Time string as civilian time
  const time = getClockTime();

  // Clear the Console and log the time
  console.clear();
  console.log(time);
}

function getClockTime() {
  // get current time
  const date = new Date();

  // Serialize clock time
  let time = {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
    ampm: 'AM'
  };

  // Convert to civilian time
  if (time.hours === 12) {
    time.ampm = 'PM';
  } else if (time.hours > 12) {
    time.ampm = 'PM';
    time.hours -= 12;
  }

  // Prepend a 0 on the hours to make double digits
  if (time.hours < 10) {
    time.hours = '0' + time.hours;
  }

  // prepend a 0 on the minutes to make double digits
  if (time.minutes < 10) {
      time.minutes = '0' + time.minutes;
  }

  // prepend a 0 on the seconds to make double digits
  if (time.seconds < 10) {
      time.seconds = '0' + time.seconds;
  }

  // Format the clock time as a string 'hh:mm:ss tt'
  return time.hours + ':'
    + time.minutes + ':'
    + time.seconds + ' '
    + time.ampm;
}