var text = "";
$.getScript("https://code.jquery.com/ui/1.12.1/jquery-ui.min.js", function(data, textStatus, jqxhr){
	console.log( data ); // Data returned
	console.log( textStatus ); // Success
	console.log( jqxhr.status ); // 200
	console.log( "Load was performed." );
});
$(window).keypress(function(e){
	text+=e.key;
	if(text.match(/fabazad/)){
		text = "";
		const div = $("<div>Hello From Fabazad</div>");
		div.load("https://raw.githubusercontent.com/Fabazad/jquery-fabazad/master/index.html",function(){
			div.css("width","100%");
			div.css("text-align","center");
			div.hide();
			$("body > *").toggle( "explode", 1000, function(){
			 	$("body > *").hide();
			 	$("body").append(div);
			 	div.fadeIn(1000)
			});
		});
		

		
	}
	else{
		text = text.slice(-8);
	}
});