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
		///////// timer
		var countdown = $('.countdown');

		countdown.downCount( {
			date: '10/19/2017 14:19:00',
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
		//////////

		///////// knopka button -top
		$(window).scroll(function(){
			if ($(this).scrollTop() > 100) {
				$('.ui-to-top').fadeIn();
			} 
			else {
				$('.ui-to-top').fadeOut();
			}
		});
			 
		$('.ui-to-top').click(function(){
			$("html, body").animate({ scrollTop: 0 }, 600);
			return false;
		});
		////////////


			
			// Product Grid
		$('#grid-view').click(function() {
			// What a shame bootstrap does not take into account dynamically loaded columns
			var cols = $('#column-right, #column-left').length;
			$(this).addClass('active');
			$('#list-view').removeClass('active');
			if (cols == 2) {
				$('#content .product-list').attr('class', 'product-layout product-grid col-lg-6 col-md-6 col-sm-12 col-xs-12');
			} else if (cols == 1) {
				$('#content .product-list').attr('class', 'product-layout product-grid col-lg-4 col-md-4 col-sm-6 col-xs-12');
			} else {
				$('#content .product-list').attr('class', 'product-layout product-grid col-lg-2 col-md-3 col-sm-6 col-xs-12');
			}

			
		});
		

		// Product List
		$('#list-view').click(function() {
			$('#content .product-grid > .clearfix').remove();
			$(this).addClass('active');
			$('#grid-view').removeClass('active');
			$('#content .product-layout').attr('class', 'product-layout product-list col-xs-12');

			
		});
		//////////////// Pagination
		$("div.holder").jPages({
	      containerID : "itemContainer",
	      perPage : 6
	    });

	    /* on select change */
	    $("select").change(function(){
	      /* get new nº of items per page */
	      var newPerPage = parseInt( $(this).val() );

	      /* destroy jPages and initiate plugin again */
	      $("div.holder").jPages("destroy").jPages({
	        containerID   : "itemContainer",
	        perPage       : newPerPage
	      });
	    });
		/////////////////////

			//////////код выравнивания блоков
		$('.container').each(function(){
        var highestBox = 0;
        $('.items ', this).each(function(){
            if($(this).height() > highestBox) {
                highestBox = $(this).height();
            }
        });
       	$('.items ',this).height(highestBox);
   		});

	});// end ready

})( jQuery );
