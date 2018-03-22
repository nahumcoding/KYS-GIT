

function displayArtists(artists){
	$('#info').empty('#info').append("<b>" + artists + "</b>");
	seatGeek(artists);
};

function displayConcerts(concerts) {
	$('#info2').empty('#info2').append("<b>" + concerts + "</b>");
	// body...
}

$(document).ready(function() { 
	
	$("#singlebutton").click(function(){
		getArtists(displayArtists);
		console.log("yes");

		});

});

// functions that pull artists/concerts and allows to refresh the screen

 // function updateConcerts();






// for firebasde we will store artists

// present on saturday


// 2 functions are needed.  Get function will nbe in "API.js' Trigger call to API and call to do refresh

// refreshing the DOM. Refreshing the page 