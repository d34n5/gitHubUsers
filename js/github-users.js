function Profile() {
  this.name = null;
  this.title = null;
  this.desciption = null;
}

Profile.prototype.getProfile = function(username){
  var currentProfile = this;

  $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
    console.log(response);
  });

  // exports.getRepos = function(){
  //   $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
  //     console.log(response);
  //   }).fail(function(error){
  //     console.log(error.responseJSON.message);
  //   });
  // };

};

exports.profileModule = Profile;
