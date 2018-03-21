


var accessToken = "BQBg0QSDQ-_uZewsE32KsFgFmcgzIoFI1Bo_CTvd3v3nzG2RzerGAgDqjn84G50VTxZdm3dbj1m2UPh6OiNVhcKDfsxaVBQx_POS7e2gzhTcTYUV4bdCRMRqD2RGoqgbqKtvouXKHWyGutm7Ajffj9l88jI";

var type = 'artists'

function getArtists (callback){
	

$.ajax({
   url: `https://api.spotify.com/v1/me/top/${type}?limit=3`,
   headers: {
       'Authorization': 'Bearer ' + accessToken
   },
   success: function(response) {





    var artists = [];

     for(i=0; i<response.items.length; i++){
       artists.push(response.items[i].name);
       }
       callback(artists);
   }
});


}



//https://open.spotify.com/user/1251530381

//to get user id, right-click on your profile and copy spotify uri

//to get top artists, go on web api console, personalization, put information

//use link example on authorization flow guide to get link format

//store upcoming concerts in firebase

//using 

//jquery to get button by id, inside onclick function you get value by id (.val), 

=======
}
>>>>>>> 8e3ee1e421485d7d09be256280e5c4287065e7d9
