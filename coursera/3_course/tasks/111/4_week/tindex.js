var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Брэд',
        gender: 'Мужской',
        email: 'newtonwilliams@example.com',
        favoriteFruit: 'Банан'
    },
    {
        name: 'Шерри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Керри',
        gender: 'Женский',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Апельсин'
    },
    {
        name: 'Стелла',
        gender: 'Женский',
        email: 'waltersguzman@example.com',
        favoriteFruit: 'Картофель'
    }
];
/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    var newCollection = collection,
        args = [].slice.call(arguments),
        result = [];
        console.log(collection);
        console.log(args);
    if (args.length === 1) {
        return newCollection;
    }
    for (var i = 1; i < args.length; i++) {
        if (args[i][0] === 'filterIn'){
            var filterField = args[i][1],
            filterValue = [];
            console.log(args[i][0], args[i][1]);
            for (var j = 2; j < args[i].length; j++) {
                filterValue.push(args[i][j]);
            }
            console.log(filterValue);
            for (var k = 0; k < newCollection.length; k ++) {
                if (filterValue.indexOf(newCollection[k][filterField]) !== -1) {
                    result.push(newCollection[k]);
                }
            }
            newCollection = result;
            result = [];
        }
    }
    console.log(newCollection);
    for (var i = 1; i < args.length; i++) {
        if (args[i][0] === 'select') {
            var selectValue = [];
            console.log(args[i][0]);
            for (var j = 1; j < args[i].length; j++) {
                selectValue.push(args[i][j]);
            }
            console.log(selectValue);
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
    console.log(newCollection);
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
 query(
     friends,
     select('name', 'gender', 'email'),
     filterIn('favoriteFruit', ['Яблоко', 'Картофель'])
 );
