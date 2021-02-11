(function (){
    var clickOpen = 0;
    $(".section-button").on("click", function (e) {
        $(e.currentTarget).parent(".section").toggleClass("active");
        console.log(e);
        //скрываем все кроме того, что должны открыть
        $(".section-content").not($(this).next()).slideUp(250);
        // открываем или скрываем блок под заголовком, по которому кликнули
        $(this).next().slideToggle(250);
        var srcImg = $(e.currentTarget);
        if (clickOpen == 0) {
            clickOpen = 1;
            srcImg.find("img").attr("src", "images/caret-down-sharp.svg");
            console.log(clickOpen);
        } else if (clickOpen == 1) {
            clickOpen = 0;
            srcImg.find("img").attr("src", "images/caret-forward-sharp.svg");
            console.log(clickOpen);
        }
    })
})();
