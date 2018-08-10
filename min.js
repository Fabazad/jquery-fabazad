var text = "";
console.log("test");
$(window).keypress(function(e){
	text+=e.key;
	if(text.match(/fabazad/)){
		text = "";
		const div = $("<div>Hello From Fabazad</div>");
		div.hide();
		$("body > *").toggle( "bounce", { times: 3 }, "slow" );
		$("body").append(div);
		div.fadeIn(1000);
	}
	else{
		text = text.slice(-8);
	}
});
