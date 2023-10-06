// обработка нажатия кнопки меню в верхней панели
$('.nav-toggle').on('click', function(){
	$('#menu').toggleClass('active');
});

$('#widget-title-action').on('click', function(){
	$('#widget-category-list-action').toggleClass('off');
});
$('#widget-title-goods').on('click', function(){
	$('#widget-category-list-goods').toggleClass('off');
});