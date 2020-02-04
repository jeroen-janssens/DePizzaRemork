$(document).ready(function(){
		var scroll_start = 0;
		var startChange = $('#logo');
		var offset = startChange.offset();

		if(startChange.length) {
			$(document).scroll(function(){
				scroll_start = $(this).scrollTop();
				if(scroll_start > offset.top) {
					$('.navbar').removeClass('bg-transparent').addClass('bg-scroll').addClass('bg-dark');
				} else {
					$('.navbar').removeClass('bg-scroll').addClass('bg-transparent')
				}
			});
		}
	});