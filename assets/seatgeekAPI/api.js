

/*====================VARIABLES================*/
var demo2  = 'https://api.seatgeek.com/2/events?client_id=MTA4NzgwNTN8MTUyMTUwOTc0OS4yMw&client_secret=ecfa2be882e10c19d4379da17ef00b9e9384f8b89b38101801203364c8e2ce85';

//!-- function-->
function seatGeek(artist, callback) { 
   
// for loop (for s=0; s<artists.length; s++){}

    $.get( demo2 +'&q='+ artist, function(data) {
    	    var concert = [];
    	    console.log(data)
     for(i=0; i<data.events.length; i++){
       concert.push({'location':data.events[i].venue.display_location, "url":data.events[i].url, "venue":data.events[i].venue.name});
       // make line above into json obj and pass to game.js
       // 3 things to display venue, city& state, date
       } 
       callback(concert, artist);
   
     console.log(concert);
    });


} 
