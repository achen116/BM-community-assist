(function() {
	$(document).ready(function() {
		socialHover();
	})

	var socialHover = function() {
		$('.social').hover(
		  function(){
		    $(this).animate({fontSize: "1.5em", duration: 1000});
		  },
		  function(){
		    $(this).animate({fontSize: "1em", duration: 1000});
		  }
		);
	}
})();