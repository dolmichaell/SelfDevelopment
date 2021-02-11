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
	 	})
	 	lorem.each(function(i, el){
	 		var bloc = $(el),
	 		text = $(el).find(".text");
	 		lorem_button = $(el).find(".lorem-button");

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
		$(".about-picture-all").addClass("akt");

		$("html,body").css("overflow","hidden");
		data_id = $(elem.currentTarget).find("img").attr("data-id");

		//console.log(objPDP[button_id]);
		srcImg = $(elem.currentTarget).find("img").attr("src");
		//$(".picture-img-button").attr("src",srcImg);
		arr = [];
		arrFirst = [];
		arrFirst = objPDP[button_id];
		var first;
// Розэдную ссилку=========================
		function getNewObject(obj) {
			var keys = Object.keys(obj)
			var newObject = {}
			keys.forEach(function (el){
				newObject[el] = obj[el]
			})
			return newObject
		}
// записую перший, другий, ......================================
		first = getNewObject(arrFirst[arrFirst.length - 2]);
		first["data-id"]= -2;
		arr.push(first);

		first = getNewObject(arrFirst[arrFirst.length - 1]);
		first["data-id"]= -1;
		arr.push(first);

		arrFirst.forEach(function (el) {
			arr.push(el);
		})

		first = getNewObject(arrFirst[0]);
		first["data-id"]= arrFirst.length+1;
		arr.push(first);

		//first = Object.create(arrFirst[1]);
		first = getNewObject(arrFirst[1]);
		first["data-id"] = arrFirst.length+2;
		arr.push(first);

		arrLength = arr.length - 1;
		var position = 25, arrImg = [];
		arr.forEach(function (el, num) {
			if (el["data-id"] == data_id) {
				keyImg = num;
			}
			el["posit"] = position;
			position = position - 50;
			var htmlImg;
			htmlImg = '<div class="about-img"><img class="picture-img-button" src='+ el.src +'></div>'
			arrImg.push(htmlImg);
		})
		console.log(arr);

		$(".about-all-img").append(arrImg);

		//console.log(button_id, srcImg, data_id, keyImg);
		trans = arr[keyImg]["posit"]
		$(".about-all-img").css("transform", "translateX("+ trans + "%)")
	})
// НОВА Кнопки вперед назад===========================
	$(".about-button1").on("click", function (e) {
 		if (keyImg <= 0) {
 			keyImg = 0;
			$(".about-all-img").css("transition", "none");
 		} else {
 			keyImg = +keyImg-1;
			trans = trans + 50;
			$(".about-all-img").css("transform", "translateX("+ trans + "%)");
			$(".about-all-img").css("transition", "all 500ms");
 		}
 		if (keyImg == 1) {
 			setTimeout(function (){
				keyImg = arrLength-2;
				trans = arr[keyImg]["posit"];
				$(".about-all-img").css("transform", "translateX("+ trans + "%)");
				$(".about-all-img").css("transition", "all 0ms");
			},  550);
			$(".about-all-img").css("transform", "translateX("+ trans + "%)");
			$(".about-all-img").css("transition", "all 500ms");
		}
	})
	$(".about-button2").on("click", function (e) {
		if (keyImg >= arrLength) {
			keyImg = arrLength;
			$(".about-all-img").css("transition", "none");
		} else {
			keyImg = +keyImg+1;
			trans = trans - 50;
			$(".about-all-img").css("transform", "translateX("+ trans + "%)");
			$(".about-all-img").css("transition", "all 500ms");
		}
		//console.log(keyImg, arrLength-1);
		if (keyImg == arrLength-1) {
			setTimeout(function (){
				keyImg = 2;
				trans = arr[keyImg]["posit"];
				$(".about-all-img").css("transform", "translateX("+ trans + "%)");
				$(".about-all-img").css("transition", "all 0ms");
			},  550);
			$(".about-all-img").css("transform", "translateX("+ trans + "%)");
			$(".about-all-img").css("transition", "all 500ms");
		}
	})
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
