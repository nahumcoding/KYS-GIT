var accessToken = "BQAdZbp3Cqo5Tb1Hhv8JbQV8OcC78qsmi-zzjGjEJMP7wAWX-rpWtThUWsSEP8q6BHFQKRCeF-JHWvDyVHA0EgQjxXQ__s1u2HUsZemMID0DVORVXH7x0d-__v0mZ9RkPn-RWCkC7vUbI-ewmfKz4P0";


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

}



//https://open.spotify.com/user/1251530381

//to get user id, right-click on your profile and copy spotify uri

//to get top artists, go on web api console, personalization, put information

//use link example on authorization flow guide to get link format

//store upcoming concerts in firebase

//using 

//jquery to get button by id, inside onclick function you get value by id (.val), 

