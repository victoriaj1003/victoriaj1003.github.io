

function unhide() {
	// check viewport width
	var intViewportWidth = window.innerWidth;
  
  if (intViewportWidth < 526) {
		document.getElementById('burger').style.visibility = 'visible';
	document.body.style.overflow = "visible";
  
	document.getElementById('greeting').innerHTML = " i'm victoria";
		$("#greeting").css({"cursor":"default",});

	} else {

  	document.getElementById('navbar').style.visibility = 'visible';
  document.body.style.overflow = "visible";
  
  document.getElementById('greeting').innerHTML = " i'm victoria";
  	$("#greeting").css({"cursor":"default",});
  	
  }

}






$( document ).ready(function() {
	console.log("ready freddy");

	$( document ).resize(function() {
    var screen = $(window)    
    if (screen.width < 526) {
        $("#burger").show();
        $("#navbar").hide();
        setInterval(resize, 5000);
    } else {
        $("#burger").hide();
        $("#navbar").show();
        setInterval(resize, 5000);
    }

});
	


});

