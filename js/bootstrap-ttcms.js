$(function(){
	// input[type=number] 取消滑鼠滾動功能
	$('form').on('focus', 'input[type=number]', function (e) {
		  $(this).on('mousewheel.disableScroll', function (e) {
		    e.preventDefault()
		  })
		})
		$('form').on('blur', 'input[type=number]', function (e) {
		  $(this).off('mousewheel.disableScroll')
		})
});