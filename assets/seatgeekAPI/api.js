

/*====================VARIABLES================*/
var seatGeekApiURL  = 'https://api.seatgeek.com/2/events?client_id=MTA4NzgwNTN8MTUyMTUwOTc0OS4yMw&client_secret=ecfa2be882e10c19d4379da17ef00b9e9384f8b89b38101801203364c8e2ce85';

//!-- function-->
function seatGeekSearch(artist, callback) { 
   

  $.get( seatGeekApiURL +'&q='+ artist, function(response) {
  
    for(i=0; i<response.events.length; i++){
      var concerts = [];

      concerts.push({ 'artist': artist, 'location':response.events[i].venue.display_location, "venue":response.events[i].venue.name, "url":response.events[i].url});
      console.log();
    } 


  callback(artist, concerts);

  // console.log(concerts);
  // console.log(concerts, artist);
  });
} 
// console.log(0;