/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var newCollection = collection,
        args = [].slice.call(arguments),
        result = [];
    if (args.length === 1) {
        return newCollection;
    }
    for (var i = 1; i < args.length; i++) {
        if (args[i][0] === 'filterIn'){
            var filterField = args[i][1],
                filterValue = [];
            for (var j = 2; j < args[i].length; j++) {
                filterValue.push(args[i][j]);
            }
            for (var k = 0; k < newCollection.length; k ++) {
                if (filterValue.indexOf(newCollection[k][filterField]) !== -1) {
                    result.push(newCollection[k]);
                }
            }
            newCollection = result;
            result = [];
        }
    }
    for (var i = 1; i < args.length; i++) {
        if (args[i][0] === 'select') {
            var selectValue = [];
            for (var j = 1; j < args[i].length; j++) {
                selectValue.push(args[i][j]);
            }
            for (k = 0; k < newCollection.length; k++) {
                var properties = Object.keys(newCollection[k]);
                for (var m = 0; m < properties.length; m++) {
                    if (selectValue.indexOf(properties[m]) === -1) {
                        delete newCollection[k][properties[m]];
                    }
                }
            }
        }
    }
    return newCollection;
}

/**
 * @params {String[]}
 */
function select() {
    var fields = [], select = [];
    for (var i = 0; i < arguments.length; i++) {
        fields.push(arguments[i]);
    }
    select = ["select"].concat(fields);
    return select;
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    var filterIn = [];
    filterIn = ["filterIn"].concat(property).concat(values);
    return filterIn;
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};