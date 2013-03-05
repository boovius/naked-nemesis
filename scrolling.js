$(function(){
  $(window).on('click', function(){
		$('#container').append("<div class='box outerBox'></div>");

		var mar = $('.box').css("marginLeft");


		$('.outerBox').animate({marginLeft: mar}, {duration: 1500, queue: false});
		$('.outerBox').fadeIn(1500);
		

	});
});
