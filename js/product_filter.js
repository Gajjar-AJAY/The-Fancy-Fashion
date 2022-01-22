$(document).ready(function()
	{
		$('.lists').click(function(){
			const values = $(this).attr('data-filter');
			if (values == 'All') {
				$('.flip-card').show('1000');
			}
			else{
				$('.flip-card').not('.'+values).hide('1000');	
				$('.flip-card').filter('.'+values).show('1000');	
			} 
		});


		$('.lists').click(function() {
			$(this).addClass('active').siblings().removeClass('active');
		});
	});