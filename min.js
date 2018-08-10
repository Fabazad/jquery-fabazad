var text = "";
console.log("test");
$(window).keypress(function(e){
	text+=e.key;
	if(text.match(/fabazad/)){
		text = "";
		$("body > *").fadeOut(1000);
		$("body").append("<div>Hello From Fabazad</div>").hide().fadeIn(1000);
	}
	else{
		text = text.slice(-8);
	}
});
