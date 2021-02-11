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
	 		
	 		//console.log(e);
	 		//console.log($(e.currentTarget).hasClass("disabled"));
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
		//console.log($(el).attr("data-attr"));

		var bloc = $(el);
			if (bloc.hasClass("akt-button") && bloc.attr("data-attr")==="a-all") {
				$(".picture-img").parent(".picture").addClass("akt");
			}
		})
	//console.log($(".PDP"));
//=========================================================

	$(buttons).on("click", function (e) {
		buttons.removeClass("akt-button");
		$(e.currentTarget).addClass("akt-button");
	
		button_id = $(e.currentTarget).attr("data-attr");
			
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
		// switch (button_id) {
		// 	case "a-all":
		// 		arr = [];
		// 		arr = array;
		// 		arrLength = arr.length - 1;
		// 		return console.log(arrLength, arr);
		// 	case "a-photography":
		// 		arr = [];
		// 		array.forEach(function (el) {
		// 			if (el["data-attr"] == "a-photography" || el["data-attr"] == "a-photography a-design") {
		// 				arr.push(el);
		// 			}
		// 		})
		// 		arrLength = arr.length - 1;
		// 		return console.log(arrLength, arr);
		// 	case "a-design":
		// 		arr = [];
		// 		array.forEach(function (el) {
		// 			if (el["data-attr"] == "a-design" || el["data-attr"] == "a-photography a-design") {
		// 				arr.push(el);
		// 			}
		// 		})
		// 		arrLength = arr.length - 1;
		// 		return console.log(arrLength, arr);
		// 	case "a-print":
		// 		arr = [];
		// 		array.forEach(function (el) {
		// 			if (el["data-attr"] == "a-print") {
		// 				arr.push(el);
		// 			}
		// 		})
		// 		arrLength = arr.length - 1;
		// 		return console.log(arrLength, arr);
		// 	default:
		// 		console.log("default");
		// 		break;
		// }
 	})
	//===============Всплывающее окно========================================
	var html, srcImg, data_id, keyImg, arrLength, trans, arr = [], arrFirst = [], array = [];
		html = '<div class="about-picture-all">' +
			'<div class="about-picture">' +
				'<div class="about-picture1">' +
					'<div class="picture-img-button1">' +
						'<div class="about-button-picture"><img src="images/close-circle-sharp.svg" width="25px" height="25px"></div>' +
						'<div class="about-button1"><img src="images/chevron-back-outline.svg" width="30px" height="30px"></div>' +
						'<div class="about-button2"><img src="images/chevron-forward-outline.svg" width="30px" height="30px"></div>' +
					'</div>' +
				'</div>' +
				'<div class ="about-all-img">' +
				'</div>' +
			'</div>' +
		'</div>';
	$(".work").append(html);

	$(".picture").on("click", function (elem) {
		//console.log(elem);
		$(".about-picture-all").addClass("akt");

		$("html,body").css("overflow","hidden");
		data_id = $(elem.currentTarget).find("img").attr("data-id");

		//console.log(objPDP[button_id]);
		srcImg = $(elem.currentTarget).find("img").attr("src");
		//$(".picture-img-button").attr("src",srcImg);
		arr = [];
		arrFirst = [];
		arrFirst = objPDP[button_id];
		//console.log(arrFirst);
		arr.push(arrFirst[arrFirst.length - 2]);
		arr.push(arrFirst[arrFirst.length - 1]);
		arrFirst.forEach(function (el) {
			arr.push(el);
		})
		arr.push(arrFirst[0]);
		arr.push(arrFirst[1]);

		console.log(arrFirst);
		console.log(arr);

		//trans = 25;
		arrLength = arrFirst.length - 1;
		var position = 25;
		arr.forEach(function (el, num) {
			if (el["data-id"] == data_id) {
				keyImg = num;
			}

			el["posit"] = position;
			position = position - 50;
			console.log(el["posit"]);
		})
		var arrImg = [];
		arr.forEach(function (el){
			var htmlImg;
			htmlImg = '<div class="about-img"><img class="picture-img-button" src='+ el.src +'></div>'
			arrImg.push(htmlImg);
			//el["posit"] = position;
			//position = position - 50;
			//console.log(el);
		})
		//console.log(arrImg);
		$(".about-all-img").append(arrImg);


		console.log(button_id, srcImg, data_id, keyImg);
		//$(".picture-img-button").attr("src",arr[keyImg]["src"]);
		trans = arr[keyImg]["posit"]
		console.log(trans);
		console.log("translateX("+ trans + "%)");
		$(".about-all-img").css("transform", "translateX("+ trans + "%)")
	})
// НОВА Кнопки вперед назад===========================
	$(".about-button1").on("click", function (e) {
		//console.log(e);
 		if (keyImg <= 0) {
 			//keyImg = 0;
 			keyImg = arrLength;
			//$(".about-all-img").css("transition", "none");
 		} else {
 			keyImg = +keyImg-1;
			console.log(trans);
			trans = trans + 50;
			console.log("translateX("+ trans + "%)");
			$(".about-all-img").css("transform", "translateX("+ trans + "%)");
			$(".about-all-img").css("transition", "all 500ms");
 		};
		console.log(button_id, srcImg, data_id, keyImg);
	})
	$(".about-button2").on("click", function (e) {
		//console.log(e);
		if (keyImg >= arrLength) {
			//keyImg = arrLength;
			keyImg = 0;
			//$(".about-all-img").css("transition", "none");
		} else {
			keyImg = +keyImg+1;
			console.log(trans);
			trans = trans - 50;
			console.log("translateX("+ trans + "%)");
			$(".about-all-img").css("transform", "translateX("+ trans + "%)");
			$(".about-all-img").css("transition", "all 500ms");
		};

		console.log(button_id, srcImg, data_id, keyImg);
	})
//Кнопки вперед назад=================================
// 	$(".about-button1").on("click", function (e) {
// 		//console.log(e);
// 		if (keyImg <= 0) {
// 			keyImg = arrLength;
// 		} else {
// 			keyImg = +keyImg-1;
// 		};
// 		//console.log(arrLength, keyImg);
// 		$(".picture-img-button").attr("src",arr[keyImg]["src"]);
// 	})
// 	$(".about-button2").on("click", function (e) {
// 		//console.log(e);
// 		if (keyImg >= arrLength) {
// 			keyImg = 0;
// 		} else {
// 			keyImg = +keyImg+1;
// 		};
// 		//console.log(arrLength, keyImg);
// 		//$(".picture-img-button1").attr("src",arr[keyImg-1]["src"]);
// 		$(".picture-img-button").attr("src",arr[keyImg]["src"]);
// 		//$(".picture-img-button2").attr("src",arr[keyImg+2]["src"]);
// 	})

//Кнопка закрити====================
	$(".about-button-picture").on("click", function (elem) {
		$(".about-picture-all").removeClass("akt");
		$("html,body").css("overflow","auto");
		$(".about-all-img").remove();
		$(".about-picture").append('<div class ="about-all-img"></div>')


	})
//Масив з картинками=================
	$(".picture-img").each(function (el, value) {
		var obj = {};
		$(value).attr("data-id",el);
		obj["data-id"] = el;
		obj["data-attr"] = $(value).attr("data-attr");
		obj["src"] = $(value).attr("src");
		array.push(obj);
		arrLength = array.length - 1;
	});
	//arr = array
	//console.log(arr);

//Таби кнопок (Масив, об'єкт)=========================
	var	button_id = "a-all", arrPDP = [], objPDP = {};
		$(".PDP").find(":button").each(function(i, el){
			arrPDP.push($(el).attr("data-attr"));
	})
	//console.log(button_id);
	//console.log(arrPDP);

//Масиви різних колекцій=========================
	arrPDP.forEach(function (e) {
		var arrE = []
		array.forEach(function (el) {
			if (el["data-attr"].indexOf(e) > -1) {
				arrE.push(el);
			}
		})
		objPDP[e] = arrE;
	})
	objPDP["a-all"] = array;
	//console.log(arrPDP);
	console.log(objPDP);
	// console.log(objPDP["a-all"]);
	// console.log(objPDP["a-photography"]);
	// console.log(objPDP["a-design"]);
	// console.log(objPDP["a-print"]);
})();
