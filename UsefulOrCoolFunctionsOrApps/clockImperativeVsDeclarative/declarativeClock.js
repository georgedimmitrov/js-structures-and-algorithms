// Solution with lots of smaller, easily debuggable functions
// Testable and reusable functions, also this program is easily scalable.

const oneSecond = () => 1000;
const getCurrentTime = () => new Date();
const clear = () => console.clear();
const log = message => console.log(message);

// Takes a date object and returns a object for clock time that contains hours
// minutes and seconds
const serializeClockTime = date => ({
  hours: date.getHours(),
  minutes: date.getMinutes(),
  seconds: date.getSeconds()
});

// Takes the clock time object and returns an object where hours are converted
// to civilian time. For example: 1300 becomes 1 o’clock
const civilianHours = clockTime => ({
  ...clockTime,
  hours: clockTime.hours > 12 ? clockTime.hours - 12 : clockTime.hours
});

// Takes the clock time object and appends time of day, AM or PM, to that object
const appendAMPM = clockTime => ({
  ...clockTime,
  ampm: clockTime.hours >= 12 ? 'PM' : 'AM'
});

// Higher Order Functions
// Takes a target function and returns a function that will send a time to the target.
const display = target => time => target(time);

// Takes a template string and uses it to return clock time formatted based upon the criteria from the string
const formatClock = format => time =>
  format
    .replace('hh', time.hours)
    .replace('mm', time.minutes)
    .replace('ss', time.seconds)
    .replace('tt', time.ampm);

// Takes an object’s key as an argument and prepends a zero to the value stored under that objects key.
// It takes in a key to a specific field and prepends values with a zero if the value is less than 10
const prependZero = key => clockTime => ({
  ...clockTime,
  [key]: clockTime[key] < 10 ? '0' + clockTime[key] : clockTime[key]
});

const compose = (...fns) => arg =>
  fns.reduce((composed, f) => f(composed), arg);

// A single function that will take clock time as an argument and transforms it into civilian time by using both civilian hours
const convertToCivilianTime = clockTime => compose(
  appendAMPM,
  civilianHours
)(clockTime);

// A single function that will take civilian clock time and make sure the hours, minutes, and seconds display double digits by prepending zeros where needed
const doubleDigits = civilianTime => compose(
  prependZero('hours'),
  prependZero('minutes'),
  prependZero('seconds')
)(civilianTime);

const startTicking = () => setInterval(
  compose(
    clear,
    getCurrentTime,
    serializeClockTime,
    doubleDigits,
    formatClock('hh:mm:ss tt'),
    display(log)
  ),
  oneSecond()
);

startTicking();