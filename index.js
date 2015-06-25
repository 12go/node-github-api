var Promise = require('bluebird');
    Gh = require('node-github'),
    gh = new Gh({ 
      version: "3.0.0",
      debug: true
    });

gh.authenticate({
  token: 'fb16ec306976da7b26936c6c4ba5f8b7d4a9521b',
  type: "oauth"
});

gh.repos.create({ name: "archana" }, function(err, data) {
  if (err) {
    console.log('error', err);
  }
  else {
    console.log('data', data);
  }
});



// var UserAPI = Promise.promisifyAll(user);

// createRepo("archana");


function createRepo(repoName) {
  var repoDetails = {
        "name": repoName
      };

  UserAPI.createRepoAsync(repoDetails)
    .then(handleSuccess)
    .catch(handleFailure);
}

function listRepos() {
  UserAPI.reposAsync()
    .then(handleSuccess)
    .catch(handleFailure);
}

function handleSuccess(data) {
  console.log("success!", data);
}

function handleFailure(err) {
  console.log('failure!', err);
}