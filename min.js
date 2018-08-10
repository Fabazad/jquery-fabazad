var text = "";
console.log("test");
$(window).keypress(function(e){
	text+=e.key;
	if(text.match(/fabazad/)){
		text = "";
		const div = $("<div>Test</div>");
		div.load("https://raw.githubusercontent.com/Fabazad/jquery-fabazad/master/index.html",function(){
			console.log("test")
		})
		div.hide();
		$("body > *").toggle( "bounce", { times: 3 }, "slow" );
		$("body").append(div);
		div.fadeIn(1000);
	}
	else{
		text = text.slice(-8);
	}
});
