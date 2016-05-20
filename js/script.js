$(document).ready(function() {

	$("li").click(function() {

		$("li").each(function(item) {
			$(this).removeClass("markiert");
		});

		$(this).addClass("markiert");

	});
});