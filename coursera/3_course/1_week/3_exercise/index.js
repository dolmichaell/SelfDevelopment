/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
		var newMinutes, newHours, incMinutes, incHours, snewHours, snewMinutes;
		newMinutes = minutes + interval;
		if (newMinutes >= 60) {
			incMinutes = Math.floor(newMinutes / 60); //  45
			newHours = hours + incMinutes;
			newMinutes = newMinutes - incMinutes*60;
		};
		if (newHours === 24) {
			newHours = 0;
		} else if (newHours > 24) { 
			incHours = Math.floor(newHours / 24);
			newHours = newHours - incHours*24;
		};
		if (newHours < 10){
			snewHours = "0" + newHours.toString();
		} else {
			snewHours = newHours.toString();
		} 
		if (newMinutes < 10){
			snewMinutes = "0" + newMinutes.toString();
		} else {
			snewMinutes = newMinutes.toString();
		};
	
	return snewHours + ":" + snewMinutes
};