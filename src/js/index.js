document.addEventListener("DOMContentLoaded",function(){
	var desiginWidth = 320;
	var ratio = document.documentElement.clienWidth / desiginWidth
	var html = document.documentElement;
	html.style.fontSize = ratio * 100 + "px"
},false)