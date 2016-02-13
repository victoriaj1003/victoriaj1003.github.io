

function unhide() {
	// check viewport width
	var intViewportWidth = window.innerWidth;

	// when hello is clicked, the menu appears, the scroll unlocks and the greeting changes
	document.body.style.overflow = "visible";
	  
	document.getElementById('greeting').innerHTML = "i'm victoria";
		$("#greeting").css({"cursor":"default",});

		document.getElementById('topbar').style.visibility = 'visible';
}



$( document ).ready(function() {
	console.log("ready freddy");

	function sizeMatters() {

		if($(window).width() < 523) {
			$("#navbar").hide();
			$("#burger").show();
			console.log("burger showing");
		} else {
			$("#burger").hide();
			$("#navbar").show();
			console.log("navbar showing");
		}
	}

	$(window).load(sizeMatters);
	$(window).resize(sizeMatters);


	$('.fa-bars').click(function() {
		$('#menuItems').toggle();
		console.log("got to the dropdown stuff");
	})

// open dropdown menu when hovering over hamburger



	// if($("#burger").hover()) {
	// 	$("#menuitems").css('visibility, visible');
	// 	console.log("i'm here");
	// } else {
	// 	$("#menuitems").css('visibility, hidden');
	// 	console.log("i'm invisible!");
	// }




});

