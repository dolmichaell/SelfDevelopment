(function() {
	
	var menu = $(".menu"),
		menu_icon = $(".icon");
	menu_icon.on("click", function (e) {
		menu.toggleClass("menu_icon");
	})
	var	lorem = $(".lorem"),
	 	lorem_button = $(".lorem-button");
	lorem_button.on("click", function (e) {
	 	if (!$(e.currentTarget).hasClass("disabled")) {
	 			$(e.currentTarget).parent(".lorem").toggleClass("active");	
	 		}
	 		
	 		console.log(e);
	 		console.log($(e.currentTarget).hasClass("disabled"));
	 	})
	 	lorem.each(function(i, el){
	 		//console.log(i, el);
	 		var bloc = $(el),
	 		text = $(el).find(".text");
	 		lorem_button = $(el).find(".lorem-button");
	 		//console.log(bloc, $(el).find(".text"));

			height = text.outerHeight();
			//console.log(height);
			if (height <= 72) {
				lorem_button.addClass("disabled");
				}
	 		})

		var post = $(".post"),
			post_fon = $(".post_fon"),
			post_title, color;
	 	
		post.each(function(it, elem){
			post_fon = $(elem).find(".post-fon");
			post_title = $(elem).find(".post-title-1");
			color = $(post_fon).css("background");
			$(post_title).css("color", color);
	 	})
	

// вивід різних шаблонів картинок
		// var	buttons = $(".PDP").find(":button");

		// 	console.log(buttons);
			
		// 	$(buttons).on("click", function (e) {
	 // 		buttons.removeClass("akt-button");
	 // 		$(e.currentTarget).addClass("akt-button");
		// var button_id = $(e.currentTarget).attr("id");
			
		// 	$(".pictures").removeClass("akt");
		// var pictures = $("#"+ button_id + "-img").addClass("akt");
	 // 		console.log(pictures);
 	// 	})
// вивід картинок по групах
		var	buttons = $(".PDP").find(":button");
			//console.log(buttons);
// присвоєння початковаго значення
			$(buttons).each(function(i, el){
	 		//console.log(i, el);
	 		var bloc = $(el);
	 			if (bloc.hasClass("akt-button") && bloc.attr("data-attr")==="a-all") {
	 				$(".picture-img").parent(".picture").addClass("akt");	
	 			}
	 		})
//=========================================================

	$(buttons).on("click", function (e) {
		buttons.removeClass("akt-button");
		$(e.currentTarget).addClass("akt-button");
	
	var button_id = $(e.currentTarget).attr("data-attr");
			
		console.log(button_id);

		$(".picture-img").parent(".picture").addClass("akt");
		if (button_id === "a-all") {
			$(".picture-img").parent(".picture").addClass("akt");
			// console.log($(".picture-img"));
		} else {
			$(".picture-img").parent(".picture").removeClass("akt");
			var	pictures = $(".picture-img[data-attr*=" + button_id + "]").parent(".picture").addClass("akt");
			//var	pictures = $(".picture-img:regex(data-attr, " + button_id + ")").parent(".picture").addClass("akt");
		
			//console.log(pictures);
			}
		switch (button_id) {
			case "a-all":
				arr = [];
				arr = array;
				arrLength = arr.length - 1;
				return console.log(arrLength, arr);
			case "a-photography":
				arr = [];
				array.forEach(function (el) {
					if (el["data-attr"] == "a-photography" || el["data-attr"] == "a-photography a-design") {
						arr.push(el);
					}
				})
				arrLength = arr.length - 1;
				return console.log(arrLength, arr);
			case "a-design":
				arr = [];
				array.forEach(function (el) {
					if (el["data-attr"] == "a-design" || el["data-attr"] == "a-photography a-design") {
						arr.push(el);
					}
				})
				arrLength = arr.length - 1;
				return console.log(arrLength, arr);
			case "a-print":
				arr = [];
				array.forEach(function (el) {
					if (el["data-attr"] == "a-print") {
						arr.push(el);
					}
				})
				arrLength = arr.length - 1;
				return console.log(arrLength, arr);
			default:
				console.log("default");
				break;
		}
 	})
	//===============Всплывающее окно========================================
	var html, srcImg, keyImg, arrLength, arr = [], array = [], arrPhotography = [], arrDesign = [], arrPrint = [];
		html = '<div class="about-picture-all">' +
		'<div class="about-picture">' +
		'<div class="about-button-picture"><img src="images/close-circle-sharp.svg" width="25px" height="25px"></div>' +
		'<div class="about-button1"><img src="images/chevron-back-outline.svg" width="30px" height="30px"></div>' +
		'<img class="picture-img-button" src=#>' +
		'<div class="about-button2"><img src="images/chevron-forward-outline.svg" width="30px" height="30px"></div></div>' +
		'</div>';
	$(".work").append(html);

	$(".picture").on("click", function (elem) {
		//console.log(elem);
		$(".about-picture-all").addClass("akt");
		srcImg = $(elem.currentTarget).find("img").attr("src");
		//console.log(srcImg);
		//console.log($(elem.currentTarget).find("img").attr("data-id"));
		$(".picture-img-button").attr("src",srcImg);
		$("html,body").css("overflow","hidden");
		var data_id = $(elem.currentTarget).find("img").attr("data-id");
		arr.forEach(function (el, num) {
			if (el["data-id"] == data_id) {
				keyImg = num;
			}
		})
		//console.log(keyImg);
	})

	$(".about-button1").on("click", function (e) {
		//console.log(e);
		if (keyImg <= 0) {
			keyImg = arrLength;
		} else {
			keyImg = +keyImg-1;
		};
		console.log(arrLength, keyImg);
		$(".picture-img-button").attr("src",arr[keyImg]["src"]);
	})
	$(".about-button2").on("click", function (e) {
		//console.log(e);
		if (keyImg >= arrLength) {
			keyImg = 0;
		} else {
			keyImg = +keyImg+1;
		};
		console.log(arrLength, keyImg);
		$(".picture-img-button").attr("src",arr[keyImg]["src"]);

	})

	$(".about-button-picture").on("click", function (elem) {
		$(".about-picture-all").removeClass("akt");
		$("html,body").css("overflow","auto");
	})
	//Масив з картинками=================
	$(".picture-img").each(function (el, value) {
		var obj = {};
		//console.log(el, value);
		$(value).attr("data-id",el);
		//arr.push(obj.data_id = el, obj.src = $(value).attr("src"));
		//console.log(el, $(value).attr("src"));
		obj["data-id"] = el;
		obj["data-attr"] = $(value).attr("data-attr");
		obj["src"] = $(value).attr("src");
		array.push(obj);
		arrLength = array.length - 1;
	});
	arr = array
	//console.log(arrLength, arr);
	console.log(arr);
	//console.log(array);

	//console.log(arr[3]["src"]);
	//console.log(arrLength);
	//Масиви різних колекцій=========================
	array.forEach(function (el) {
		//console.log(el, value);
		//console.log($("el[data-attr *= a-photography]"));
		//console.log(el["data-attr"]);
		//console.log(el["data-id"]);

		// var	pictures = $(".picture-img[data-attr*=" + el["data-attr"] + "]")
		// if (el["data-attr"] == "a-photography" || el["data-attr"] == "a-photography a-design") {
		// 	arrPhotography.push(el);
		// } else if (el["data-attr"] == "a-design" || el["data-attr"] == "a-photography a-design") {
		// 	arrDesign.push(el);
		// } else if (el["data-attr"] == "a-print") {
		// 	arrPrint.push(el);
		// };

		//console.log(keyImg);
	})

	//console.log(arrPhotography);
	//console.log(arrDesign);
	//console.log(arrPrint);

})();
