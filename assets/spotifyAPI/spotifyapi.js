
var accessToken = "BQBLyBFPgr-xB9ZlyzXrrroCVBC21gVUroO5vJYoYLnRWojQBQsQxOr1A8PiF_fkZZKvEMqBz8hznC5XbKOPxP-pWGB5oVV8yQrEbDFJh3a5jFSLk7sfEGrrKL1wopAzudaIvN2xPBVrgb5y9r5X77yv";


var type = 'artists'

function getArtists (callback){
	

$.ajax({
   url: `https://api.spotify.com/v1/me/top/${type}?limit=3`,
   headers: {
       'Authorization': 'Bearer ' + accessToken
   },
   success: function(response) {


    var artists = [];

     for(i = 0; i < response.items.length; i++){
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

