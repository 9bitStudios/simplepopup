/*
* File: jquery.simplePopup.js
* Version: 1.0.0
* Description: Create a simple popup to display content
* Author: 9bit Studios
* Copyright 2012, 9bit Studios
* http://www.9bitstudios.com
* Free to use and abuse under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/

(function ($) {

    $.fn.simplePopup = function (options) {

        var defaults = $.extend({
        }, options);
        
		/******************************
		Private Variables
		*******************************/         
        
        var object = $(this);
		var settings = $.extend(defaults, options);
        
		/******************************
		Public Methods
		*******************************/         
        
        var methods = {
        	
			init: function() {
				return this.each(function () {
					methods.appendHTML();
					methods.setEventHandlers();
					methods.showPopup();
				});
			},
			
			/******************************
			Append HTML
			*******************************/			
			
			appendHTML: function() {

			},

			/******************************
			Set Event Handlers
			*******************************/			
			
			setEventHandlers: function() {
			
				$(".simplePopupClose, .simplePopupBackground").on("click", function (event) {
					methods.hidePopup();
				});
				
				$(window).on("resize", function(event){	
				
					methods.positionPopup();
				});				
				
			},
			
			showPopup: function() {
	            $(".simplePopupBackground").css({
	                "opacity": "0.7"
	            });
	            $(".simplePopupBackground").fadeIn("fast");
	            $(".simplePopup").fadeIn("slow");
	            methods.positionPopup();
			},
			
			hidePopup: function() {
	            $(".simplePopupBackground").fadeOut("fast");
	            $(".simplePopup").fadeOut("fast");
			},			
			
			positionPopup: function() {
	            var windowWidth = $(window).width();
	            var windowHeight = $(window).height();
	            var popupWidth = $(".simplePopup").width();				
	            var popupHeight = $(".simplePopup").height();
				console.log(windowHeight);
	            $(".simplePopup").css({
	                "position": "absolute",
	                "top": (windowHeight / 2) - (popupHeight / 2),
	                "left": (windowWidth / 2) - (popupWidth / 2)
	            });
			},			
        
        };
        
        if (methods[options]) { 	// $("#element").pluginName('methodName', 'arg1', 'arg2');
            return methods[options].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof options === 'object' || !options) { 	// $("#element").pluginName({ option: 1, option:2 });
            return methods.init.apply(this);  
        } else {
            $.error( 'Method "' +  method + '" does not exist in slickhover plugin!');
        } 
};

})(jQuery);