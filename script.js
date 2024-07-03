const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const currentDate = new Date();
const currentDay = daysOfWeek[currentDate.getUTCDay()];
const currentUTCTime = currentDate.getTime();

document.querySelector(
  '[data-testid="currentDay"]'
).textContent = `${currentDay}`;
document.querySelector(
  '[data-testid="currentTimeUTC"]'
).textContent = `${currentUTCTime}`;
