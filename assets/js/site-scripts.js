(function($){
	
	$( document ).ready( function() {
		new WOW().init();

		$( '.main-menu__icon' ).on( 'click', function() {
			var $this = $( this ),
				$parent = $this.parent( '.main-menu' );

			$parent.toggleClass( 'menu_state_open' );
   	 	});
   	 	$('.parallax-window').parallax({imageSrc: 'assets/images/13025752_01_D3.jpg'});

	})

})(jQuery);
