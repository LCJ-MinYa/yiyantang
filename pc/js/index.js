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

	/*------ 执行方法 ------*/
	$(function() {
		UTILS.setLeftNavZoom();
		UTILS.changeTab();
		var runPage = new FullPage({
			id: 'pageContain',
			slideTime: 500,
			effect: {
				transform: {
					translate: 'X',
					scale: [1, 1],
					rotate: [0, 0]
				},
				opacity: [0, 1]
			},
			mode: 'wheel,nav:navBar',
			easing: 'ease'
		});
	});
}());