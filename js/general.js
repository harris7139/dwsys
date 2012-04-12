//	***************************************************************************************
//	This general.js file contains general setup information for the jQuery/JavaScript tools
//	***************************************************************************************
$(document).ready(function(){ 
						   
	// Dropdown Menu Setup
	// More information: http://users.tpg.com.au/j_birch/plugins/superfish/
	$("ul.sf-menu").supersubs({ 
		minWidth:    9,   // minimum width of sub-menus in em units 
		maxWidth:    20,   // maximum width of sub-menus in em units 
		extraWidth:  1,     // extra width can ensure lines don't sometimes turn over 
		dropShadows:   false
	}).superfish({ 
		delay:       500,                            	// one second delay on mouseout 
		animation:   {opacity:'show',height:'show'},  	// fade-in and slide-down animation 
		speed:       180,                          		// faster animation speed 
		autoArrows:  false,                           	// disable generation of arrow mark-up 
		dropShadows: false                            	// disable drop shadows 
	}).find('ul').bgIframe({opacity:false});  
	
	// Lightbox Setup
	// More information: http://leandrovieira.com/projects/jquery/lightbox/
	// Sample: <a href="http://dummyimage.com/800x500" rel="lightbox"><img src="http://dummyimage.com/60x60" alt="Thumb" /></a> (note the rel="lightbox")
	$('a[rel~="lightbox"]').lightBox(); // Select all links with lightbox rel
	$('a[rel~="lightbox-locations"]').lightBox(); // Second lightbox
	// Example to add a second unique lightbox: $('a[rel~="lightbox2"]').lightBox( { containerResizeSpeed: 300 } ); // Select all links with lightbox2 rel
	// Alternate method:  $('a.lightbox').lightBox(); // Select all links with lightbox class
		
	// Hide element on click where it contains: class="clickhide"
	$('.clickhide').click(function() { $(this).fadeOut(600); });
	
	
	// Scroll to top animation
	$('.scroll-top').click(function(){ 
		$('html, body').animate({scrollTop:0}, 'slow'); return false; 
	});
	
	
	
	
	// contact form validation
		var hasChecked = false;
		$("#submit").click(function () { 
			hasChecked = true;
			return checkForm();
		});
		
		$("#name,#email,#message").live('change click', function(){
			if(hasChecked == true)
			{
				return checkForm();
			}
		});
		
		function checkForm()
		{
			var hasError = false;
			var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
			
			if($("#name").val() == '') {
				$("#error-name").fadeIn();
				hasError = true;
			}else{
				$("#error-name").fadeOut();
			}
			
			if($("#email").val() == '') {
				$("#error-email").fadeIn();
				hasError = true;
			}else if(!emailReg.test( $("#email").val() )) {
				$("#error-email").fadeIn();
				hasError = true;
			}else{
				$("#error-email").fadeOut();
			}
			
			if($("#message").val() == '') {
				$("#error-message").fadeIn();
				hasError = true;
			}else{
				$("#error-message").fadeOut();
			}
			
			if(hasError == true)
			{
				return false;
			}else{
				return true;
			}
		}
		// end contact form validation
}); 