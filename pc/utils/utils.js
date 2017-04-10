var UTILS = (function(root, factory) {
	"use strict";

	factory.setLeftNavZoom = function() {
		var windowWidth = window.screen.width;
		var leftNavScale = windowWidth / 1920;
		$("#leftNav ul li span").css("font-size", 16 * leftNavScale + 'px');
	}

	factory.changeTab = function() {
		$("#leftNav ul li").click(function() {
			var dataUrl = $(this).attr("data-url") + '.html';
			window.location.href = dataUrl;
		})
	}

	/* 暴露 API 工厂*/
	return factory;

})(window, window.UTILS = window.UTILS || {});