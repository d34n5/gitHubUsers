
var apiKey = require('./../.env').apiKey;

function Profile (username) {
  this.username = username.toString();
}

Profile.prototype.getRepos = function(username, displayFunction){
  $.get('https://api.github.com/users/' + username + '/repos?access_token=' + apiKey).then(function(response){
    console.log(JSON.stringify(response));
    displayFunction(response);
  }).fail(function(error){
    console.log(error.responseJSON.message);
  });
};

exports.profileModule = Profile;
