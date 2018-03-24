function displayConcerts(artist, concert) {
	for (j=0; j<concert.length; j++){
		var updateConcerts = concert[j];
	}
		 $('#tabRow00').append( "<th>" + "Artist:   " + "</th>" + '<td>' + updateConcerts.artist + '</td>');
		 $('#tabRow01').append( "<th>" + "Where:    " + "</th>" + '<td>' + updateConcerts.location + '</td>');
		 $('#tabRow02').append( "<th>" + "Venue:    " + "</th>" + '<td>' + "<br>" + updateConcerts.venue + '</td>');
		 $('#tabRow03').append( "<th>" + "When:    " + "</th>" + '<td>' + "<br>"+ updateConcerts.when+ '</td>'); 
		 $('#tabRow04').append( "<th>" + "<br>" + "To Ticket Master: --->" + "</th>" + '<td>' +  "<a href=" + updateConcerts.url + ">" +"Buy Tickets"+ "</a>" + '</td>');

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
		$('.hideIt').hide();
		$("#myTable").show();
		getArtists(displayArtists);

	})
// console.log(getArtists());
});



// for firebasde we will store artists

// present on saturday


// 2 functions are needed.  Get function will nbe in "API.js' Trigger  to API and call to do refresh

// refreshing the DOM. Refreshing the page 