var spotifyResponse = ['artist1', 'artist2', 'artist3'];

function refreshScreen(artists){
	$('#info').empty('#info').append("<b>" + artists + "</b>");
};

$(document).ready(function() { 
	
	$("#singlebutton").click(function(){
		getArtists(refreshScreen);
		console.log("yes");

		});

});

// functions that pull artists/concerts and allows to refresh the screen

 // function updateConcerts();






// for firebasde we will store artists

// present on saturday


// 2 functions are needed.  Get function will nbe in "API.js' Trigger call to API and call to do refresh

// refreshing the DOM. Refreshing the page 