$(document).ready(function() {

	$("li").click(function() {

		$("li").each(function(item) {
			$(this).removeClass("active");
			$(this).find("a").removeClass("active");

		});

		$(".active").click(function(){
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
        $(".indexContent").height("500");

    	});

    	$(".windsurf").click(function(){
        var newHeight = $(".input-height").val();
        $(".indexContent").height("750");

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