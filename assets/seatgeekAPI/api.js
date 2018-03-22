

/*====================VARIABLES================*/
var demo2  = 'https://api.seatgeek.com/2/events?client_id=MTA4NzgwNTN8MTUyMTUwOTc0OS4yMw&client_secret=ecfa2be882e10c19d4379da17ef00b9e9384f8b89b38101801203364c8e2ce85';

//!-- function-->
function myFunction(artist,callback) { 
   

    $.get( demo2+'&q='+artist, function( data ) {
     console.log (data);
    });

} 







myFunction ('lil wayne', 'drake',)