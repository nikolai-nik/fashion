(function($){
	
	$( document ).ready( function() {
		new WOW().init();

		$( '.main-menu__icon' ).on( 'click', function() {
			var $this = $( this ),
				$parent = $this.parent( '.main-menu' );

			$parent.toggleClass( 'menu_state_open' );
   	 	});
   	 	
   	 	$('div[data-type="background"]').each(function(){
    	var $bgobj = $(this);

 		$( window ).scroll( function() {
        	var yPos = -( $( window ).scrollTop() / $bgobj.data('speed')); 
        	var coords = '50% '+ yPos + 'px';
     
        	$bgobj.css({ backgroundPosition: coords });
    	} ); 

	});// end ready
	})


})

(jQuery);
