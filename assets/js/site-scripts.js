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

		});

		var countdown = $('.countdown');

		countdown.downCount( {
			date: '10/16/2017 14:19:00',
			offset: +3
		}, function () {
		} );

		var curVal;

		$('.activities .likes').on( 'click', function(){

			var $this = $( this ),
				$val  = $( '.value', $this ),
				initVal = +$this.data('init');

				$val.html(initVal++);

				$this.data('init', initVal);

			return false;

		} )

	});// end ready

})( jQuery );
