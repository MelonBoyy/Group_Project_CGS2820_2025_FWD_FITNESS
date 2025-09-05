let slideshowIndex = 2;

// Shorthand ID getter
function $(id)
{
	return document.getElementById( id );
}

function Initialize()
{
	slideshowMaskContainer = $( "maskSlideshow" ).children;
	PlaySlideshow();
}

function PlaySlideshow()
{
	// Cycle through the slideshow
	slideshowIndex++;
	if (slideshowIndex > slideshowMaskContainer.length - 1) { slideshowIndex = 0; }

	// Show the element (starting the animation in the process) and then add and event listener to stop it once it's done
	slideshowMaskContainer[ slideshowIndex ].style = "display: block;"
	slideshowMaskContainer[ slideshowIndex ].addEventListener( "animationend", UnloadSlide )

	setTimeout( PlaySlideshow, 2500 )
}

// This function is used to remove the event listener and stop displaying the element after the animation is done
function UnloadSlide( event )
{
	event.target.style = "display: none;";
	event.target.removeEventListener( "animationend", UnloadSlide )
}

window.onload = Initialize