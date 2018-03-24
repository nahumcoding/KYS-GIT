
var accessToken = "BQClh1Qo5UchqvLhS3lYqph-wR0NueAqSw0AqS-BBJ2EQUSHJKRo9AAwF5D26Ck_ageZp_QH42E0NY-u98o2WeuWUUWgg9lCsrCEyVZVJkcFcZjRySSfgZo51wp_nQwTKJb5K1cE_QLFKOG6DDs5Hcyz";


var type = 'artists'

function getArtists (callback){
	

  $.ajax({
    url: `https://api.spotify.com/v1/me/top/${type}?limit=3`,
    headers: {
      'Authorization': 'Bearer ' + accessToken
   },
   
  success: function(response) {
    
     artists = [];

      for(i = 0; i < response.items.length; i++){
        artists.push(response.items[i].name);
        
      }
      callback(artists); 
   }

});
console.log();
}
console.log();


//https://open.spotify.com/user/1251530381

//to get user id, right-click on your profile and copy spotify uri

//to get top artists, go on web api console, personalization, put information

//use link example on authorization flow guide to get link format

//store upcoming concerts in firebase

//using 

//jquery to get button by id, inside onclick function you get value by id (.val), 

