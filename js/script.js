$(document).ready(function() {

	$("li").click(function() {

		$("li").each(function(item) {
			$(this).removeClass("active");
			$(this).find("a").removeClass("active");

		});

		$(this).find("a").addClass("active");
		$(this).addClass("active");

	});
});