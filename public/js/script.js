	jQuery(document).ready(function(){
		jQuery('#menu-wrap').prepend('<div id="menu-trigger">Menu</div>');
			jQuery('#menu-trigger').on('click', function(){
				jQuery('#menu').slideToggle();
			});
		});