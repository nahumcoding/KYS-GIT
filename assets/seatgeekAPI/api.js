/*====================VARIABLES================*/

var queryURL
var APIKey
var topname ['top artists', ]



$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

      console.log(response)