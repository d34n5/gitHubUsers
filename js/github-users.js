// function Profile() {
//   this.name = null;
//   this.title = null;
//   this.desciption = null;
// }
//
// Profile.prototype.getProfile = function(username){
//   var currentProfile = this;
//
//   $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
//     console.log(response);
//   });
// };
//
// exports.profileModule = Profile;




function Profile() {
  this.username = null;
  this.repoName = null;
  this.repoDescription = null;
}

Profile.prototype.getProfile = function(username) {

  var currentProfile = this;
  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  });
};

exports.movieModule = Movie;
