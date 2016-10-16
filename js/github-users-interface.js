
var Profile = require('./../js/github-users.js').profileModule;

var showRepos = function(userData){
  userData.forEach(function(data){
    $('#repos ol').append("<li>" + data.name + "<br>" + data.description + "<br></li>");
  });
  $('#avatar').append("<img src='" + data.owner.avatar_url + "' alt='user avatar'>");
  $("#error").append(error.responseJSON.message);
};

$(document).ready(function(){
  $('#userSearch').submit(function(event){
    event.preventDefault();
    var username = $("#usernameInput").val();
    $("#handle").append("Username:  " + username + "<p><br><br> Recent Repository Names & Descriptions: ");
    var newProfile = new Profile(username);
    newProfile.getRepos(newProfile.username, showRepos);
  });
});
