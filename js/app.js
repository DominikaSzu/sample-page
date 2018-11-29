$(document).ready(function() {
	$(".main").prepend("<h1 class='title'>SAMPLE INTERESTING PAGE</h1>");
	$(".title").css("color", "teal");
	$("h3:eq(0)").css("color", "pink");

	var text = $("<p>");
	text.append("<h2>Elo elo 3, 2 0!");

	$(".main").append(text);

	whenEnter = () => {
		$(".main").css("background-color", "pink");
	}

	whenLeave = () => {
		$(".main").css("background-color", "beige");
	}

	$(".clickme").on("click", whenEnter);
	$(".clickme").on("mouseleave", whenLeave);
});