PREP
====
1) Get a personal access token to your github account with the default permissions.
2) Certify bot token: 

INITIAL SETUP
=============
1) Create the repo `GITHUB_USERNAME/git-for-everyone`
2) Add the webhook pointing back to the app
  - `http://certify-staging.herokuapp.com/github/forks`
  - event we want is ["fork"]
3) Add collaborators
  - certify
  - hubyeti
  - hubchupacabra

SETUP REPO CONTENT
==================
4) Replicate `certify/template-everyone` into repo on master branch
5) Add issues
  * Issue 1 from bot
  Title: "Class Goals"
  Body: "Please tell us one thing you would like to learn in today's class!"

  * Issue 2 from bot
  Title: "Fixing Internet Explorer"
  Body: "We really need to fix Internet Explorer!"

  = Comment from user ""I think Microsoft needs to fix internet explorer. But I do agree that we should make this look OK in IE9+ as we have a bunch of corporate users.

  * Issue 3 from bot
  Title: "Things to include in ideal bio"
  Body: "We should all create great bios in this project. Make sure your bio includes:" (and here add a checklist with name, where you are from, favorite food, a hobby)

  * Issue 4 from bot
  Title: "Create a .gitignore file"
  Body: "We need to create a .gitignore file and add .log files."

6) Setup PR
  - Create a branch called `add-gitignore`
  - Add a file to the branch called `.gitignore` containing the single line ".log" and the comment "Add gitignore file to ignore logs"
  - Create a pull request from the `add-gitignore branch` to `master`
  Title: 'Add gitignore file to ignore log'
  Body: 'This PR is in response to #4' (#4 is issue 4 from above)
