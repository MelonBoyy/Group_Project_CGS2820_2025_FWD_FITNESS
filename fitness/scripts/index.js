let slideshowIndex = 2;
function $( id )
{
	return document.getElementById( id );
}

function initialize() {
	slideshowMaskContainer = $("maskSlideshow").children;
	

	playSlideshow();
}

function playSlideshow()
{
	slideshowIndex++;
	if (slideshowIndex > slideshowMaskContainer.length - 1) { slideshowIndex = 0; }

	slideshowMaskContainer[ slideshowIndex ].style = "display: block;"
	slideshowMaskContainer[ slideshowIndex ].addEventListener( "animationend", unloadSlide )

	setTimeout( playSlideshow, 2500 )
}

function unloadSlide( event ) {
	event.target.style = "display: none;";
	event.target.removeEventListener( "animationend", unloadSlide )
}

window.onload = initialize