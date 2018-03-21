var accessToken = "BQBckKoaOaiiDy4QlF4HFpE5PjS9Bl6ACUHUcsMqiVq5s5EaZzmbQfAd3kRMYuoAVmM_GdPp3YPeSMRs7nBFWPNxod0EvDgPCLWsmOVbcgmMAWbsVcKY0rN0BlWzxz-TJ_dZaWjr0Fi9vIu9Lc-55MlK";
var type = 'artists'
function getArtists (callback){
	
$.ajax({
   url: `https://api.spotify.com/v1/me/top/${type}?limit=1`,
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