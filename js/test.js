function randomArray() {
    var randomCoef = Math.round(Math.random() * 100);
    var array = [];

    while (randomCoef > 0) {
        array.push({key: randomCoef, value: 0, color: ""});
        --randomCoef;
    }
    return {array: array.reverse(), coef: randomCoef};
}
function result() {
    var result = {
        arrayWithColor: [],
        arrayWithValue: [],
        arrayFiltered: [],
        elementOfRightFindCondition: {},
        coefficient: 0
    }
    var arr = randomArray();
    //console.log(result);
    arr.array.forEach(function(elem){
        //console.log(elem.key);
        if (elem.key >= 1 && elem.key <= 10){
            elem.color = "red"
        } else if (elem.key >= 11 && elem.key <= 20) {
            elem.color = "green"
        } else {
            elem.color = "blue"
        }
        result.arrayWithColor.push(elem);
        });
    
    arr.array.forEach(function(elem){
        elem.value = elem.key * arr.array.length;
        result.arrayWithValue.push(elem);
        });
    var filte = arr.array.filter(function(elem){
        return elem.color === "red"
    });
    result.arrayFiltered = filte;

    var fin = arr.array.find(function(elem){
        return elem.value > 150
    });
    result.elementOfRightFindCondition = fin;
    console.log(arr);
    console.log(filte);
    console.log (fin)

    // TODO Your code should be here, please set all results to result variable in proper way.
    // ДЕЛАТЬ Ваш код должен быть здесь, пожалуйста, установите все результаты в результирующую переменную должным образом.
    
    return result
}

//result();
//test(result());
console.log(test(result()));

function test(resultToTest) {
    var checks = {validColor: false, validValue: false, validFilter: false, validFind: false}
    var coef = resultToTest.coefficient
    var colorCheck = []
    var valueCheck = []
    var filterCheck = []
    for(var i=0; i < resultToTest.arrayWithColor.length; i++) {
        var elem = resultToTest.arrayWithColor[i]
        if(coef >= 1 && coef <= 10) {
            colorCheck.push(elem.color === "red");
        } else if(coef >= 11 && coef <= 20) {
            colorCheck.push(elem.color === "green");
        } else {
            colorCheck.push(elem.color === "blue");
        }
    }

    for(var i=0; i < resultToTest.arrayWithValue.length; i++) {
        var elem = resultToTest.arrayWithValue[i]
        var coef = i + 1;
        valueCheck.push((elem.value / coef) === resultToTest.coefficient);

    }

    for(var i=0; i < resultToTest.arrayFiltered.length; i++) {
        var elem = resultToTest.arrayFiltered[i]
        filterCheck.push(elem.color === "red");

    }

    checks.validColor = !colorCheck.find(el => !el) && colorCheck.length !== 0;
    checks.validValue = !valueCheck.find(el => !el) && valueCheck.length !== 0
    checks.validFilter = !filterCheck.find(el => !el) && filterCheck.length !== 0
    checks.validFind = resultToTest.elementOfRightFindCondition.value > 150;
    return checks;
}