/**
 * @param {String} tweet
 * @returns {String[]}
 */
module.exports = function (tweet) {
var hashtags=[], tags;
		tags = tweet.split(" ");
		for (var i = 0; i < tags.length; i++){
			if (tags[i].indexOf("#") !== -1) {
				hashtags.push(tags[i].slice(1));
			};
		}
	return hashtags;
};
