var Gh = require('github-api'),
    Promise = require('bluebird');

var gh = new Gh({ token: 'fb16ec306976da7b26936c6c4ba5f8b7d4a9521b' });

var user = gh.getUser();

// Promise.try(user.repos)
//   .then(console.log)
//   .catch(console.log);


user.repos(myCb);

function myCb(e, data) {
  if (!e) {
    console.log('success!', data);
  }
  else {
    console.log('failed!', e);
  }
}

// octo.repos.create({
//   "name": "Hello-World",
//   "description": "This is your first repository",
//   "homepage": "https://github.com",
//   "private": false,
//   "has_issues": true,
//   "has_wiki": true,
//   "has_downloads": true
// });