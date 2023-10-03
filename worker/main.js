window.onload = function() {
	let status_top = document.getElementById("work_top_statuses");
	let status_bottom = document.getElementById("work_bottom_statuses");

	// let para = document.createElement("p");
	// para.textContent = "We hope you enjoyed the ride.";
	// sect.appendChild(para);

	console.log(status_top);
	console.log(status_bottom);
	console.log(classes);
	console.log(hero);

	// обработка нажатия кнопки меню в верхней панели
	$('.nav-toggle').on('click', function(){
			$('#menu').toggleClass('active');
		});
};
