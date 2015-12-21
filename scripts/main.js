

function unhide() {

  document.getElementById('navbar').style.visibility = 'visible';
  document.body.style.overflow = "visible";
  
  document.getElementById('greeting').innerHTML = " i'm victoria";
  
}

$( document ).ready(function() {
	console.log("ready freddy");

	

/*function unhide() {
 document.getElementByID('navbar').style.visibility = 'visible';
} */

	// $("greeting1").fadeOut(1000);
	// $("greeting2").fadeIn(1000);


});