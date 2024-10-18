const loveDate = new Date("2022-07-01");

const dateElement = document.getElementById("date");
const countElement = document.getElementById("count");
const dayCountElement = document.getElementById("day-count");

dateElement.innerHTML = new Intl.DateTimeFormat("vi-VN").format(loveDate);

setInterval(() => {
    const currentDate = new Date();
    const gapDay = Math.floor((currentDate - loveDate) / (1000 * 60 * 60 * 24));  
    dayCountElement.innerHTML = gapDay + "DAYS";
    countElement.innerHTML =
    currentDate.getHours() +
    ":" +
    currentDate.getMinutes() +
    ":" +
    currentDate.getSeconds();
}, 1000);