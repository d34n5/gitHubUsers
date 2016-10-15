
var Profile = require('./../js/github-users.js').profileModule;

Profile.prototype.displayProfileInfo = function(){
  $('#error').html(" ");
  $('#userInfo').html(" ");
  $('#userInfo').append("<img src='" + this.userInfo.avatar_url + "' class='avatar'>" + "<h3>" + this.userInfo.login + "</h3>" + "<p> GitHub Profile </p>" + "<p> Public Repos:  " + this.userInfo.public_repos + "</p>");
};

Profile.prototype.displayRepos = function(){
  $('#repos').html(" ");
  var repoDivs = "";
  this.repos.forEach(function(repo){
    repoDivs += "<div class='repoDisplay'>";
    repoDivs += "<h4>" + repo.name + "</h4>";
    repoDivs += "<p>" + repo.description + "</p>";
    repoDivs += "</div>";
  });
  $('#repos').html("<p> Recent Repos:  </p>" + repoDivs);
};

Profile.prototype.displayError = function(searchString){
  $('#userInfo').html(" ");
  $('#repos').html(" ");
  var display = "<h3> Invalid GitHub UserName.  Retry if you insist. </h3>;"
  $('#error').html(display);
};

$(document).ready(function(){
  var currentProfile = new Profile();
  $('#searchForm').submit(function(event){
    event.preventDefault();
    var searchInput = $('#usernameInput').val();
    $('#usernameInput').val(" ");
    currentProfile.getProfileInfo(searchInput);
  });
});
