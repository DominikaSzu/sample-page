$(document).ready(function() {
	$(".menu li").hover(function(){
		$(".about-us-dropdown", this).slideDown(100);
	}, function(){
		$(".about-us-dropdown", this).stop()
	});

	
});