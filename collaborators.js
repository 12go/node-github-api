var Promise = require('bluebird');
    Gh = require('node-github'),
    gh = new Gh({ 
      version: "3.0.0"
    });

module.exports = collaborators();

function collaborators() {

  return {
    add: add,
    add_Promise: add_Promise
  };

  function add_Promise(collabuser) {
    var RepoAPI;

    gh.authenticate({
      token: 'fb16ec306976da7b26936c6c4ba5f8b7d4a9521b',
      type: "oauth"
    });

    RepoAPI = Promise.promisifyAll(gh.repos);

    return RepoAPI.addCollaboratorAsync({ 
      user: "certify",
      repo: "archana",
      collabuser: collabuser
    });
  }

  function add(collabuser) {
    gh.authenticate({
      token: 'fb16ec306976da7b26936c6c4ba5f8b7d4a9521b',
      type: "oauth"
    });

    gh.repos.addCollaborator({ 
      user: "certify",
      repo: "archana",
      collabuser: collabuser
    }, myCb);
  }

  function myCb() {
    console.log('done!');
  }

  function createRepo() {
    gh.repos.create({ name: "archana" }, myCb);
  }

  function success(data) {
    console.log('yay data', data);
  }

  function failure(err) {
    console.log('omg error', err);
  }
}