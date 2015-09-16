$(document).ready(function(){

	var numberTimesClicked = 0;

	$(".generate").on("click", function(){
		numberTimesClicked++;		

		$(".removeColor").show();
		var generateMessage= $("<div class='newDiv'><p>Line #"+ numberTimesClicked + "</p>" 
							+ "<button class='changeColor'>Change Color!</button>" 
							+ "<button class='removeDiv'>Remove!</button></div>");

		$(".generateDiv").append(generateMessage);

		$(".changeColor").on("click", function(){
			$(this).closest(".newDiv").addClass("green");
		});

		$(".removeColor").on("click", function(){
			$(".newDiv").removeClass("green");
		});

		$(".removeDiv").on("click", function(){
			$(this).closest(".newDiv").remove()
		});
	});
});