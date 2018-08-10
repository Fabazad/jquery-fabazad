var text = "";
$(window).keypress(function(e){
	text+=e.key;
	if(text.match(/fabazad/)){
		text = "";
		const div = $("<div>Hello From Fabazad</div>");
		div.load("https://raw.githubusercontent.com/Fabazad/jquery-fabazad/master/index.html",function(){
			console.log("test");
		});
		div.css("width","100%");
		div.css("text-align","center");
		div.hide();
		$("body > *").toggle( "explode", 1000, function(){
		 	$("body > *").hide();
		 	$("body").append(div);
		 	div.fadeIn(1000)
		});

		
	}
	else{
		text = text.slice(-8);
	}