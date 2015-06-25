var webhook = require('./webhooks'),
    collab = require('./collaborators'),
    Gh = require('node-github'),
    gh = new Gh({ 
      version: "3.0.0"
    });

// collab.add("hubyeti")
// collab.add("hubchupacabra");

// webhook.add("certify", "archana", "web");


var hookDetails = {
  "user": "certify",
  "repo": "archana",
  "name": "web",
  "config": {
    "url": "http://certify-staging.herokuapp.com/github/forks",
    "content_type": "json"
  },
  "events": [ "fork" ]
};

gh.authenticate({
  token: 'fb16ec306976da7b26936c6c4ba5f8b7d4a9521b',
  type: "oauth"
});

gh.repos.createHook(hookDetails, myCb);

function myCb() {
  console.log('done!');
}