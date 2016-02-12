

function unhide() {
	// check viewport width
	var intViewportWidth = window.innerWidth;

	// when hello is clicked, the menu appears, the scroll unlocks and the greeting changes
	document.body.style.overflow = "visible";
	  
	document.getElementById('greeting').innerHTML = "i'm victoria";
		$("#greeting").css({"cursor":"default",});

		document.getElementById('topbar').style.visibility = 'visible';
}

// 	// if hamburger is clicked on, list becomes visible
// document.getElementById("burger").onclick = function() {dropMenu()};
// 	console.log('dropMenu was found');

// // dropdown toggles between show and hide
// 	function dropMenu() {
// 		document.getElementById("menuItems").classList.toggle("show");
// 	}

// 	// closes the menu if user clicks outside of it
// 	window.onClick = function(event) {
// 		if (!event.target.matches('#burger')) {
// 			var dropdown = document.getElementByClassName("menu-content");
// 			var i;
// 			for (i = 0; i < dropdown.length; i++) {
// 				var openDrop = dropdown[i];
// 				if (openDrop.classList.contains('show')) {
// 					openDrop.classList.remove('show');
// 				}
// 			}
// 		}
// 	}





$( document ).ready(function() {
	console.log("ready freddy");

	function sizeMatters() {

		if($(window).width() < 526) {
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




	// if($("#burger").hover()) {
	// 	$("#menuitems").css('visibility, visible');
	// 	console.log("i'm here");
	// } else {
	// 	$("#menuitems").css('visibility, hidden');
	// 	console.log("i'm invisible!");
	// }




});

