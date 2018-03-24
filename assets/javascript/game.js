function displayConcerts(artist, concert) {
	for (j=0; j<concert.length; j++){
		var updateConcerts = concert[j];
	}
	console.log(updateConcerts);
		 $('#index00').append( "<th>"+ "Artist: " + "</th>" + '<td>' + updateConcerts.artist + '</td>');
		 $('#index01').append( "<th>"+ "Where: " + "</th>" + '<td>' + updateConcerts.location + '</td>');
		 $('#index02').append( "<th>"+ "Venue: " + "</th>" + '<td>' + updateConcerts.venue + '</td>');
		 $('#index03').append( "<th>"+ "url: " + "</th>" + '<td>' +"<br>"+"<br>"+ updateConcerts.url + '</td>');
		 // $('#index02').empty('#index02').append( updateConcerts.location ) ;
}

function displayArtists(artistResult){
	// $('#info').empty('#info').append("<b>" + artistResult + "</b>");
 		for (p=0; p<artistResult.length; p++){
 			// calls seatGeekSearch function  in api.js and calls displayConcerts
			seatGeekSearch(artistResult[p], displayConcerts);
		}
};



// start function. is triggered by click
$(document).ready(function() { $("#myTable").hide()
	$("#singlebutton").click(function(){
		$("#myTable").show()
		getArtists(displayArtists);

	});
// console.log(getArtists());
});



// for firebasde we will store artists

// present on saturday


// 2 functions are needed.  Get function will nbe in "API.js' Trigger  to API and call to do refresh

// refreshing the DOM. Refreshing the page 