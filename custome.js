$(document).ready(function() {
	$('.accordion_box:first').addClass('active')
	$('.accordion_box:first').children('.acc_trigger').children('i').addClass('fa-minus')
	$('.accordion_box:first').children('.acc_trigger').addClass('selected').next('.acc_container').show()

	$('.acc_trigger').click(function(event) {
		if($(this).hasClass('selected')){
			$(this).removeClass('selected');
			$(this).children('i').removeClass('fa-minus');
			$(this).next().slideUp();
			$(this).parent().removeClass('active');	
		}else{
			$('.acc_trigger').removeClass('selected');
			$(this).addClass('selected');
			$('.acc_trigger').children('i').removeClass('fa-minus');
			$(this).children('i').addClass('fa-minus');
			$('.acc_trigger').next().slideUp();
			$(this).next().slideDown();
			$('.accordion_box').removeClass('active');
			$(this).parent().addClass('active');
			(this).parent().addClass('opened');
		}
	});
});



