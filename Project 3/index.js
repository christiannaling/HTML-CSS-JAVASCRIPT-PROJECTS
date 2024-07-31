const monthName = document.getElementById('month-name');

const dayName = document.getElementById('day-name');

const dayNum = document.getElementById('day-number');

const yearElement = document.getElementById('year');

const date = new Date();
const month = date.getMonth();

monthName.innerText = date.toLocaleString('en', {
  month:'long'
});

dayName.innerText = date.toLocaleString('en', {
  weekday: 'long'
});

dayNum.innerText = date.getDate();

yearElement.innerText = date.getFullYear();