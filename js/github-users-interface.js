
var Profile = require('./../js/github-users.js').profileModule;

var showRepos = function(userData){
  userData.forEach(function(data){
    $('#repos ol').append("<li> Name:  " + data.name + "<br> Description:  " + data.description + "<br></li>");
  });
  $('#avatar').append("<img src='" + data.owner.avatar_url + "' alt='user avatar'>");
  $("#error").append(error.responseJSON.message);
};

$(document).ready(function(){
  $('#userSearch').submit(function(event){
    event.preventDefault();
    $('#repos ol').html(" ");
    $('#handle').html(" ");
    var username = $("#usernameInput").val();
    $("#handle").append("Username:  " + username + "<p><br><br> Recent Repositories: ");
    var newProfile = new Profile(username);
    newProfile.getProfile(newProfile.username, showRepos);
  });
});
