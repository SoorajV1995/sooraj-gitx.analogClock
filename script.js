let timeStamp;
let hours;
let minutes;
let seconds;
let time;
let clock;
let amPm;

window.onload=function digitalClock() {
	timeStamp = new Date();
	
	hours = timeStamp.getHours();
	minutes = timeStamp.getMinutes();
	seconds = timeStamp.getSeconds();
	hours = hourFormat(hours);
	hours = hourTodecimal(hours,minutes,seconds);
     
     let secAngle = seconds*6;
     let minAngle = minutes*6;
     let hourAngle = hours*30;


	document.getElementById("s-hand").setAttribute("transform", "rotate(" + secAngle + ",70,70)");
    document.getElementById("m-hand").setAttribute("transform", "rotate(" + minAngle + ",70,70)");
    document.getElementById("h-hand").setAttribute("transform", "rotate(" + hourAngle + ",70,70)");

	setTimeout(digitalClock,1000);
}

function hourFormat(hour) {
	if(hour > 12) {
		hour = hour - 12;
	}
	return hour;
}

function hourTodecimal(hour, minute, second) {
	hour = hour + (minutes / 60) + (seconds / 3600);
	return hour;
}
