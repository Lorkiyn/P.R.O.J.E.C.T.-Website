$(document).ready(function() {

	$("li").click(function() {

		$("li").each(function(item) {
			$(this).removeClass("markiert");
			$(this).find("a").removeClass("markiert");

		});

		$(this).find("a").addClass("markiert");
		$(this).addClass("markiert");
		$(this).css('color', 'red');

	});
});