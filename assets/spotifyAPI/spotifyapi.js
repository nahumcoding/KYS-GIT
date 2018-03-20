var accessToken = "BQCngKOvUpYV1XJWWMx2LQpeP2vBrmp2Qgx60mE2GHSUQpwA4Zx8sbsn_6TkWVpwVEYoyYKNaOW-bbEiwQ_2olObHRvdKDb5VexFWfFTzUqTLmN44mqf_QdV6qZjfIhDVxu3BHqaRO16oZEH0gKf_MTv_gM";
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