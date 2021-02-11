(function() {
	var menu = document.getElementsByClassName("menu"),
		menu_icon = document.getElementsByClassName("icon");
		console.log(menu_icon);
		menu_icon[0].addEventListener("click", function(e){
			menu[0].classList.toggle("menu_icon");
			console.log("test");
		});
})();