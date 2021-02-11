(function () {
    function memory() {
        return {
            arrAll: [],
            init: function () {
                var arr = ["images/1.png", "images/2.png", "images/3.png", "images/4.png", "images/5.png", "images/6.png", "images/7.png", "images/8.png"];

                this.arrAll = arr;
                $.each(arr, function (i) {
                    this.arrAll.push(arr[i]);
                }.bind(this))
                this.randomArray(this.arrAll);
                this.initHtml(this.arrAll);
                this.buttonNew($(".content-section-button"));
                this.pictures($(".picture-img"));
            },
            randomArray: function (array) {
                array.sort(() => Math.random() - 0.5);
            },
            initHtml: function (array) {
                var html = "";

                console.log(array);
                $.each(array, function (i, value) {
                    html = html + '<div class="picture-img">\n' +
                        '<div class="picture-img-shirt"><img src="images/10.png"></div>\n' +
                        '<div class="picture-img-images"><img src="'+ value +'"></div>\n' +
                        '</div>\n'
                })
                $(".picture").append(html);
            },
            buttonNew: function (button) {
                button.on("click", function (e) {
                    var but = $(e.currentTarget);

                    $(".picture-img").remove();
                    memory().init();
                })
            },
            first: false,
            second: false,
            arrOver: [],
            pictures: function (pictures) {
                pictures.on("click", function (e) {
                    el = $(e.currentTarget);
                    this.first = el;

                    if (this.second != false) {
                        console.log("1-"+ this.first.children(".picture-img-images").find("img").attr("src"), "2-"+ this.second.children(".picture-img-images").find("img").attr("src"));
                    } else {
                        console.log("1-"+ this.first.children(".picture-img-images").find("img").attr("src"), "2-"+ this.second);
                    }

                    this.flip();
                    if (this.second != false && this.first.hasClass("flip") && this.second.hasClass("flip") && this.first.children(".picture-img-images").find("img").attr("src") == this.second.children(".picture-img-images").find("img").attr("src")) {
                        this.open();
                        this.arrOver.push(this.first.children(".picture-img-images").find("img").attr("src"));
                    } else if (this.second != false && this.first != false && this.first.hasClass("flip") && this.second.hasClass("flip") ) {
                        this.close();
                    }
                    this.second = this.first;
                    this.over();
                }.bind(this))
            },
            flip: function (){
                if (el.hasClass("flip")) {
                    el.removeClass("flip");
                    this.first = false;
                    this.second = false;
                } else {
                    el.addClass("flip");
                }
            },
            open: function (){
                var last = this.second;
                setTimeout(function (){
                    el.addClass("active");
                    last.addClass("active");
                    el.removeClass("flip");
                    last.removeClass("flip");

                }, 550);
                el.off("click");
                last.off("click");
            },
            close: function (){
                var last = this.second;
                setTimeout(function (){
                    el.removeClass("flip");
                    last.removeClass("flip");
                }, 550);
            },
            over: function (){
                if (this.arrOver.length == this.arrAll.length / 2) {
                    $(".picture-img").remove();
                    $(".picture").append('<div class="picture-img"><h4>GAME OVER</h4></div>');
                };
            },
        }
    }
    memory().init();
})()