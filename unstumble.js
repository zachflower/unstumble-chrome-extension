var frame = document.getElementById("tb-stumble-frame");
var spinner = document.getElementsByClassName("spinner-idx");
var checks = 0;

if ( frame != null ) {
	window.location = frame.src;
} else if (spinner != null && spinner.length > 0) {
	redirectAfterDOMLoad();
}

function redirectAfterDOMLoad() {
	var frames = document.getElementsByClassName("stumble-frame");

	if (frames != null && frames.length > 0) {
		window.location = frames[0].src;
	} else {
		checks++;

		if ( checks < 120 ) {
		    setTimeout( redirectAfterDOMLoad, 1000 );
		}
	}
}