/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var newCollection = collection,
        args = [].slice.call(arguments);
    args.sort();
    if (args.length === 1) {
        return newCollection;
    }
    args.forEach(function (elem) {
        if (typeof elem === "function") {
            newCollection = elem(newCollection)
        };
    });
    return newCollection;
}

/**
 * @params {String[]}
 */
function select() {
    var string = [].slice.call(arguments);
    return function select (args) {
        return args.map (function (elem) {
            var obj = {};
            string.forEach(function (el) {
                obj[el] = elem[el];
            })
            return obj;
        })
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filterIn (args) {
        return args.filter (function (elem) {
            return values.includes(elem[property]);
        });
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};