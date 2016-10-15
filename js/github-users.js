
var apiKey = require('./../.env').apiKey;

function Profile() {
  this.profileInfo = null;
  this.repos = [];
}

Profile.prototype.getProfileInfo = function(username) {
  var currentProfile = this;
  $.get('https://api.github.com/users/' + username + '?access_token=' + apiKey).then(function(response){
    currentProfile.profileInfo = response;
    currentProfile.getRepos();
    currentProfile.displayProfileInfo();
  })
  .fail(function(error){
    currentProfile.displayError(username);
  });
};

exports.profileModule = Profile;
