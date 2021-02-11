/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
	return hashtags.map(function(elem){
			return elem.toLowerCase();
		}).filter(function(el, index, arr){
			return arr.indexOf(el) == index;
		}).join(", ");
};
