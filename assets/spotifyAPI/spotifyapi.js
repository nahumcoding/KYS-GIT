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