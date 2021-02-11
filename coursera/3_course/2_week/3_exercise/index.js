// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var namePhones;
    namePhones = command.split(" ");
    switch (namePhones[0]) {
        case "ADD":
            return addContact(namePhones[1], namePhones[2].split(","));
        case "REMOVE_PHONE":
            return removeContact(namePhones[1]);
        case "SHOW":
            return showContacts();
        default:
            console.log("default");
            break;
    }
}
function addContact(name, phones) {
    if (phoneBook.hasOwnProperty(name)) {
        phoneBook[name] = phoneBook[name].concat(phones);
    } else {
        phoneBook[name] = phones;
    }
}
function removeContact(phone) {
    var telDel = false;
    for (var phoneKey in phoneBook) {
        var index = phoneBook[phoneKey].indexOf(phone);
        if (index >= 0) {
            phoneBook[phoneKey].splice(index, 1);
            if (phoneBook[phoneKey].length === 0) {
                delete phoneBook[phoneKey];
            }
            telDel = true;
        }
    }
    return telDel;
}
function showContacts() {
    var arr = [], key = Object.keys(phoneBook).sort();
    key.forEach(function (elem){
        arr.push(elem+": "+phoneBook[elem].join(", "));
    });
    return arr;
};
