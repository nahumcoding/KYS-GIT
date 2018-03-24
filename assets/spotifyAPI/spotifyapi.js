
var accessToken = "BQAP4kCFHs0KsmUl_GNSKJ4OuuunRq9ySTy4DPfonIhGuDWzJvqvDEWkObfH2Q0sY_gjz578DChV1Zz9oO9ZRckvT3D7fSbwZ04hQATT3N21xfd2EFg0_VsXXkexkCRqo9y3ldXc6yusXwzVtRuDh4k8";


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

