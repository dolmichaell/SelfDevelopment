// Телефонная книга
var phoneBook = {
	data : []
	};
/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
function phone(command) {
	var newNamePhones, namePhones, phones;
		namePhones = command.split(" ");
		console.log(command);
		console.log(namePhones);
		if (namePhones[0] === "ADD") {
			newNamePhones = namePhones.slice(1,3);
			name = newNamePhones[0];
			phones = newNamePhones[1];
		} else if (namePhones[0] === "REMOVE_PHONE") {
			newNamePhones = namePhones.slice(1,2);
			phones = newNamePhones[0];
		};
		console.log(newNamePhones);
		console.log(name, phones);
		switch (namePhones[0]) {
			case "ADD":
				return addContact(name, phones);
			case "REMOVE_PHONE":
				return removeContact(phones);
			case "SHOW":
				return showContacts();
			default:
				console.log("default");
				break;
		};
};
function addContact(name, phones) {
	var arr = [], maybeValue;
		arr = phones.split(",");
		maybeValue = phoneBook.data.find(function(elem){
			return elem.name === name;
		});
		if (!maybeValue)  {
			var objNamePhones = {};
			objNamePhones.name = name;
			objNamePhones.phones = arr;
			phoneBook.data.push(objNamePhones)
		} else {
			arr.forEach(function(elem){
				maybeValue.phones.push(elem);
			});
		};
				
	console.log(phoneBook);
};
function removeContact(phones) {
	var teleValue, telephon, obj = {};
		console.log(phones);
		console.log(phoneBook);
		if (!teleValue) {

		};
		telephon = phoneBook.data.find(function(elem){
			return elem.phones.includes(phones);
		});
		console.log(phones[0]);
		console.log(telephon);
};
function showContacts() {
	console.log("В телефонной книге: ");
};
phone('ADD Ivan 555-10-01,555-10-03');
phone('ADD Ivan 555-10-02');
phone('ADD Alex 555-20-01');
phone('REMOVE_PHONE 555-20-01');
//phone('SHOW');

//phoneBook('ADD Ivan 555-10-02');
//phoneBook('REMOVE_PHONE 555-10-03');
//phoneBook('SHOW');

//command(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']);
//function taking(hashtags) {
	 //    return hashtags.map(function(elem){
		// 	return elem.toLowerCase();
		// }).filter(function(el, index, arr){
		// 	return arr.indexOf(el) == index;
		// }).join(", ");

		//===============
		// tags.forEach(function(elem){
		// 	hashs.push(elem.toLowerCase();
		// });
		//===========
		// for (var i = 0; i < tags.length; i++){
		// 	hashs[i] = tags[i].toLowerCase();
		// };
		//console.log(hashs);
	//return 
//};
//taking(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']);
// var hashs=[], tags;
// 		tags = tweet.split(" ");
// 		for (var i = 0; i < tags.length; i++){
// 			if (tags[i].indexOf("#") !== -1) {
// 				hashs.push(tags[i].slice(1));
// 			};
// 		};
// 		console.log(hashs);