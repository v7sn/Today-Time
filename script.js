const years = document.getElementById('years');
const months = document.getElementById('months');
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const milliseconds = document.getElementById('milliseconds');


function displayTime() {
	let time = new Date();
	years.textContent = time.getFullYear();
	months.textContent = time.getMonth();
	days.textContent = time.getDay();
	hours.textContent = time.getHours();
	minutes.textContent = time.getMinutes();
	seconds.textContent = time.getSeconds();
	milliseconds.textContent = time.getMilliseconds();

	if (time.getHours() > 12) {
		hours.textContent = time.getHours() - 12;
	}
}

setInterval(displayTime, 1);
