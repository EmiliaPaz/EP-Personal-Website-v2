//
// /* Smooth Scrolling */
// $(document).ready(function() {
// 	'use strict';
// 	// Select all links with hashes
// 	$('.nav-item').click(function(event) {
//     		// On-page links
//     		if (
//       			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
//       			&&
//       			location.hostname == this.hostname
//     		){
//     			// Figure out element to scroll to
//       			var target = $(this.hash);
//       			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
//       			// Does a scroll target exist?
//      			if (target.length) {
//         			// Only prevent default if animation is actually gonna happen
//        				event.preventDefault();
//         			$('html, body').animate({
//          				 scrollTop: target.offset().top
//        				}, 1000, function() {
//           				// Callback after animation
//           				// Must change focus!
//           				var $target = $(target);
//          				$target.focus();
//           				if ($target.is(":focus")) { // Checking if the target was focused
//             					return false;
//           				} else {
//             					$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
//             					$target.focus(); // Set focus again
//           				};
//         			});
//       			}
//     		}
//   	});
// });
//
//
// /* Highlight menu item on scroll */
// $(document).ready(function(){
// 	'use strict';
// 	$(window).scroll( function() {
// 		'use strict';
// 		$("section").each( function() {
// 			'use strict';
// 			var bb=$(this).attr("id"); // ABOUT, CONTACT, DOWNLOAD
// 			var hei=$(this).outerHeight();
// 			var grttop=$(this).offset().top -70;
// 			if ($(window).scrollTop() > grttop && $(window).scrollTop() < grttop + hei) {
// 				$(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
// 			} else  {
// 				$(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
// 			}
// 		});
// 	});
// });
