(function ($){
    $.fn.myAccordion = function (config) {
        function init(but, multiple) {
            var lastElement = false;

            $(but).on("click", function (e) {
                var el = $(e.currentTarget);

                if (!multiple) {
                    hideLastActiveElement(el, lastElement);
                }
                lastElement = checkCurrentElement(el, lastElement);
            })
        }

        function setHeight(el, value) {
            el.parent(".section").children(".section-content").css("height", value);
        }

        function open(el) {
            var contentHeight = el.parent(".section").find(".p-content").height(),
                intHeight = contentHeight/60,
                first = 0,
                intervalId = null;

            el.addClass("active");
            intervalId = setInterval(function () {
                if (first < contentHeight) {
                    setHeight(el, first + "px");
                    first = first + intHeight;
                } else {
                    setHeight(el, "100%");
                    clearInterval(intervalId);
                }
            }, 17)
        }

        function close(el) {
            var contentHeight = el.parent(".section").find(".p-content").height(),
                intHeight = contentHeight/60,
                intervalId = null;

            el.removeClass("active");
            intervalId = setInterval(function () {
                if (contentHeight > 0) {
                    setHeight(el, contentHeight + "px");
                    contentHeight = contentHeight - intHeight;
                } else {
                    setHeight(el, "");
                    clearInterval(intervalId);
                }
            }, 17)
        }

        function hideLastActiveElement(el, lastEl) {
            if (lastEl && el[0] !== lastEl[0] && lastEl.hasClass("active")) {
                close(lastEl);
            }
        }

        function checkCurrentElement(el, lastEl) {
            if (!el.hasClass("active")) {
                open(el);
                lastEl = el;
            } else {
                close(el);
            }
            return lastEl
        }

        init(this, config);

    }
    $($($('.accordion')[0]).children('.section').children('.section-button')).myAccordion();
    $($($('.accordion')[1]).children('.section').children('.section-button')).myAccordion();
    $($($('.accordion')[2]).children('.section').children('.section-button')).myAccordion();
    $($($('.accordion')[3]).children('.section').children('.section-button')).myAccordion(true);
})(jQuery);
