function displayConcerts(concert) {
	for (j=0; j<concert.length; j++){
		var updateConcerts = concert[j];

		// var updatedArtists = [];
		// updatedArtists.push


  		// $('#info2').append(updateConcerts.artist[0]);
  //      	 });
			// $('#myTable tr:last').after('<tr>' + updateConcerts.location + '</tr>' + updateConcerts.url + '<tr>' + updateConcerts.venue + '</tr>');
			// $('#info').append("<td>" + concerts[0].artist + "<br>" + "</td>");
	}
	console.log(updateConcerts)
		// $('#info').empty('#info').append("<b>" + updateConcerts + "</b>");
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
		console.log();
	});
});




// for firebasde we will store artists

// present on saturday


// 2 functions are needed.  Get function will nbe in "API.js' Trigger  to API and call to do refresh

// refreshing the DOM. Refreshing the page 