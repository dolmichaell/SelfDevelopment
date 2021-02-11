(function ($) {
    $.widget("my.factorial", {
        _create: function () {
        console.log(this.factorial(3));
        },
        factorial: function (n) {
        if (n <= 0) {
            console.log(n);
            return 1;
        } else {
            console.log(n);
            return (n * this.element.factorial(n - 1));
        }
    }
    })
    //console.log($().myFactorial(3));
})(jQuery)