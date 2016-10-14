function Profile() {
  this.name = name;
  this.title = title;
  this.desciption = description;
}

Profile.prototype.getProfile = function(username){
  var currentProfile = this;
  exports.getRepos = function(){
    $.get('https://api.github.com/users/daneden?access_token=' + apiKey).then(function(response){
      console.log(response);
    }).fail(function(error){
      console.log(error.responseJSON.message);
    });
  };

}

exports.profileModule = Profile;
