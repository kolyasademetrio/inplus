$.fn.navigation = function() {
	// Cache selectors
	var lastId,
	topMenu = this,
	topMenuHeight = topMenu.outerHeight()+15,
			// All list items
			menuItems = topMenu.find("a"),
			// Anchors corresponding to menu items
			scrollItems = menuItems.map(function() {
				var item = $($(this).attr("href"));
				if (item.length) { return item; }
			}),
			noScrollAction = false;

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e) {
		var href = $(this).attr("href"),
		offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
		noScrollAction = true;
		$("html, body").stop().animate({ 
			scrollTop: offsetTop
		}, {
			duration: 300,
			complete: function() {
				menuItems
				.parent().removeClass("active")
				.end().filter("[href=" + href +"]").parent().addClass("active");
				setTimeout(function(){ noScrollAction = false; }, 10);
			}
		});
		e.preventDefault();
	});

	// Bind to scroll
	$(window).scroll(function() {
		if (!noScrollAction) {
			// Get container scroll position
			var fromTop = $(this).scrollTop() + topMenuHeight;

			// Get id of current scroll item
			var cur = scrollItems.map(function() {
				if ($(this).offset().top < fromTop) {
					return this;
				}
			});
			// Get the id of the current element
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : "";

			if (lastId !== id) {
				lastId = id;
				menuItems.parent().removeClass("active").end().filter("[href=#"+id+"]").parent().addClass("active");
			};
		};
	});

	var $menu = $("#menu");
	$(window).scroll(function(){
	    if ( $(this).scrollTop() > 0 && $menu.hasClass("default") ){
	        $menu.fadeOut('fast',function(){
	            $(this).removeClass("default")
	                   .addClass("fixed transbg")
	                   .fadeIn('fast');
	        });
	    } else if($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
	        $menu.fadeOut('fast',function(){
	            $(this).removeClass("fixed transbg")
	                   .addClass("default")
	                   .fadeIn('fast');
	        });
	    }
	});//scroll
	$menu.hover(
	    function(){
	        if( $(this).hasClass('fixed') ){
	            $(this).removeClass('transbg');
	        }
	    },
	    function(){
	        if( $(this).hasClass('fixed') ){
	            $(this).addClass('transbg');
	        }
	});//hover
}