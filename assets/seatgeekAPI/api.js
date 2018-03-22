

/*====================VARIABLES================*/
var demo2  = 'https://api.seatgeek.com/2/events?client_id=MTA4NzgwNTN8MTUyMTUwOTc0OS4yMw&client_secret=ecfa2be882e10c19d4379da17ef00b9e9384f8b89b38101801203364c8e2ce85';

//!-- function-->
function seatGeek(artist) { 
   
// for loop (for s=0; s<artists.length; s++){}

    $.get( demo2 +'&q='+ artist, function(data) {
     console.log (data);
    });

} 
<<<<<<< HEAD







myFunction ('lil wayne', 'drake',)
=======
>>>>>>> c4dbe9b1f3991b47099faa8aa0a0e3802eb09570
