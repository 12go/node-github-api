var Promise = require('bluebird');
    Gh = require('github-api'),
    gh = new Gh({ token: 'fb16ec306976da7b26936c6c4ba5f8b7d4a9521b' }),
    user = gh.getUser();

var UserAPI = Promise.promisifyAll(user);


createRepo("coolnewrepo");


function createRepo(repoName) {
  var repoDetails = {
        "name": repoName
      };

  UserAPI.createRepoAsync(repoDetails)
    .then(handleSuccess)
    .catch(handleFailure);
}

function handleSuccess(data) {
  console.log("success!", data);
}

function handleFailure(err) {
  console.log('failure!', err);
}