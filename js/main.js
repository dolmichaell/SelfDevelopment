(function () {
    var human = {
        name: null,
        lastname: null,
        init: function (name, lastname) {
            this.name = name;
            this.lastname = lastname;
            return this;
        },

        test: function () {
            console.log(this.name);
        }
    }

    var human2 = Object.assign(Object.create(human),{
        init: function (test, test2) {
            this.__proto__.init(test, test2)
            return this;
        },

        test: function () {
            console.log(this.name + " " + this.lastname)
        }
    })
    console.log(human2)
    var obj = Object.create(human).init('Andrii', 'Dolinskyi');
    var obj2 = Object.create(human2).init('Andrii2', 'Dolinskyi2');


    obj.test();
    obj2.test()
    obj2.__proto__.__proto__.test()
})();