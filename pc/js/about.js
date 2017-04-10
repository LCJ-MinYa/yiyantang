/*
 * ===========================
 *
 * 首页 => index
 * @author   : LiChaoJun
 * @datetime : 2017/2/11
 *
 * ===========================
 */
(function() {
	var aboutChangeTab = function() {
		$(".about-bg ul li").click(function() {
			var dataUrl = $(this).attr("data-url") + '.html';
			window.location.href = dataUrl;
		})
	}

	/*------ 执行方法 ------*/
	$(function() {
		UTILS.setLeftNavZoom();
		UTILS.changeTab();
		aboutChangeTab();
	});
}());