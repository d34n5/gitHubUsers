// var Profile = require('./../js/github-users.js').profileModule;
// var apiKey = require('./../.env').apiKey;
//
// $(document).ready(function(){
//   //event.preventDefault();
//   $('#user').submit(function(event){
//     var username = $('#username').val();
//   });
// });








var Profile = require('./../js/github-users.js').profileModule;

$(document).ready(function() {
  var ourProfile = new Profile();

  $('#user').submit(function(event) {
    event.preventDefault();
    var searchInput = $('#username').val();
    ourProfile.getProfile(searchInput);
    // $('#info').html('...');
    // setTimeout(function() {
    //   $('#info').html(ourMovie.title + "<br>" + ourMovie.year + "<br>" + ourMovie.plot + "<img class='poster' src='" + ourMovie.poster + "'>");
    // }, 1000);
  });

});
