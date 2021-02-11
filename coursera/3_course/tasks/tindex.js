function task5() {
    var obj = {a: 1, b: 2, c: 3};
    console.log(obj["c"]);
    console.log(obj.c);
}
function task6() {
    var obj = {Коля: '1000', Вася :'500', Петя: '200'}
    console.log(obj.Петя, obj.Коля);
    console.log(parseInt(obj.Петя)+parseInt(obj.Коля));
    task5();
}
function task7() {
    var obj = {}, day;
    day = new Date().getDay();
    obj["1"] = "понеділок";
    obj["2"] = "вівторок";
    obj["3"] = "середа";
    obj["4"] = "четвер";
    obj["5"] = "п'ятниця";
    obj["6"] = "субота";
    obj["7"] = "неділя";
    console.log(obj[day]);
}
function task9() {
    var arr = [[1,2,3],[4,5,6],[7,8,9]];
    console.log(arr[1][0]);
    task7();
}
function task10() {
    var obj = {js:["jQuery", "Angular"]};
    obj.php = "hello";
    obj.css = "world";
    console.log(obj.js[0]);
}
function task12() {
    var obj = {ru: ["понеділок", "вівторок", "середа", "четвер"], en: ["monday", "tuesday", "wednesday", "thursday"]};
    obj.lang = "en";
    obj["day"] = 2;
    console.log(obj[obj.lang][obj.day-1]);
    console.log(obj);
}
function task61() {
    var obj = {};
    obj.method1 = function () {
        return this
    }
    obj.method2 = function () {
        return this
    }
    obj.method3 = function () {
        return "метод3"
    }
    obj.method1().method2().method3();
    console.log(obj);
    console.log(obj.method1().method2().method3());
}
// function task1() {
//     var city1 = {}, city2 = {};
//     city1.name = "ГородN";
//     city1.population = 10000000;
//     city2 = {name: "ГородМ", popularion: 1e6}
//     city1.getName = function () {
//         return this.name;
//     }
//     city2.getName = function () {
//         return this.name;
//     }
//
//     function getObj () {
//         return this;
//     }
//     city1.getCity = getObj;
//     city2.getCity = getObj;
//     console.log(city1);
//     console.log(city1.getCity());
//     console.log(city2);
//     console.log(city2.getCity());
// }
function task() {
    var array = [1, 2, 3, 4, 5, 6, 7];
    console.log(array.filter(inBetween(3, 6)));
    console.log(array.filter(inArray([1, 2, 6, 10])));
    function inBetween(a, b) {
        return function (elem) {
            return elem >= a && elem <= b;
        }
    }
    //======================================
    function inArray(arr) {
        return function (elem) {
            return arr.indexOf(elem) !== -1;
        }
    }
};
task();