(function ($) {
    $.fn.myFactorial = function factorial(n) {
        if (n <= 0) {
            //console.log(n);
            return 1;
        } else {
            //console.log(n);
            return (n * factorial(n - 1));
        }
    };
    console.log($.fn.myFactorial(10));
})(jQuery);
