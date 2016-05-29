$(document).ready(function() {

	$("li").click(function() {

		$("li").each(function(item) {
			$(this).removeClass("active");
			$(this).find("a").removeClass("active");

		});

		$(".home active").click(function(){
        var newHeight = $(".input-height").val();
        $(".indexContent").height("300");

    	});

		$(".news").click(function(){
        var newHeight = $(".input-height").val();
        $(".indexContent").height("1000");

    	});

    	$(".history").click(function(){
        var newHeight = $(".input-height").val();
        $(".indexContent").height("1050");

    	});

    	$(".rules").click(function(){
        var newHeight = $(".input-height").val();
        $(".indexContent").height("600");

    	});

    	$(".windsurf").click(function(){
        var newHeight = $(".input-height").val();
        $(".indexContent").height("900");

    	});

    	$(".story").click(function(){
        var newHeight = $(".input-height").val();
        $(".indexContent").height("600");

    	});

    	$(".picture").click(function(){
        var newHeight = $(".input-height").val();
        $(".indexContent").height("1050");

    	});

    	$(".info").click(function(){
        var newHeight = $(".input-height").val();
        $(".indexContent").height("850");

    	});

		$(this).find("a").addClass("active");
		$(this).addClass("active");

	});
});