const now = new Date();
console.log(now);
console.log(typeof now);
// year, months, day, times
console.log(now.getFullYear());
console.log(now.getMonth()); // January = 0
console.log(now.getDate());
console.log(now.getDay()); // Sunday = 0
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
// timestamps
console.log(now.getTime()); // => milliseconds
// date strings
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());
// timestamps & comparisons
const before = new Date("February 1 2020 7:30:59");
//console.log(now.getTime(), before.getTime());
const diff = now.getTime() - before.getTime();
console.log(diff);
const mins = Math.round(diff/1000/60);
const hours = Math.round(mins/60);
const days = Math.round(hours/24);
console.log(days, hours, mins);
// converting timestamps into date objects
const timestamp = 1675938474990;
console.log(new Date(timestamp));
// building a digital clock
const clock = document.querySelector(".clock");
const tick = () => {
  const now = new Date();
  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const html = `
    <span>${h}</span> : 
    <span>${m}</span> : 
    <span>${s}</span>
  `;

  clock.innerHTML = html;
};
setInterval(tick, 1000);
// date-fns library
console.log(dateFns.isToday(now)); // => true
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'MM'));
console.log(dateFns.format(now, 'D'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'DD'));
console.log(dateFns.format(now, 'dddd Do MMMM YYYY'));
// comparing dates
console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));