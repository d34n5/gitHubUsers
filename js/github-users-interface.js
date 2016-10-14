var Profile = require('./../js/github-users.js').profileModule;
var apiKey = require('./../.env').apiKey;


$(document).ready(function(){
  //event.preventDefault();
  $('#user').submit(function(event){
    var username = $('#username').val();
   export.getRepos();
  });
  //response.forEach(function(profile) {
    //$('#rpDisplay').append(profile.title + " <br> " + profile.description + " <p> ");
  //});
});
