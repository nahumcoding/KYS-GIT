var accessToken = null;



$.ajax({

	url: 'https://accounts.spotify.com/authorize?client_id=117298f8d65647da97d993cc58cfd26d&redirect_uri=https://www.google.com&scope=user-read-private%20user-read-email&response_type=token&state=123',

	success: function(response) {};
})

//$.ajax({
  // url: 'https://api.spotify.com/v1/me',
   //headers: {
     //  'Authorization': 'Bearer ' + accessToken
   //},
   //success: function(response) {
     //  ...
  // }
//});


//https://accounts.spotify.com/authorize?client_id=5fe01282e94241328a84e7c5cc169164&redirect_uri=http:%2F%2Fexample.com%2Fcallback&scope=user-read-private%20user-read-email&response_type=token&state=123

//BQC4v6UgjpnmW4EvO_SFb3kNrrV1gB1Jlv68VMUIrVzFBmpO84vNrSo9ir-YgIEOSG5Wqynzc_JhZHZsotpm0rycjcZFj189zCBP46iJw6HxEP0kpz7yH5IRANmXKn2El4CDIXR9mpG79Ft4hD6ZhZwIkJsxbuM


//https://open.spotify.com/user/1251530381

//to get user id, right-click on your profile and copy spotify uri

//to get top artists, go on web api console, personalization, put information

//use link example on authorization flow guide to get link format

