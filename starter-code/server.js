'use strict';

// DONE: Initialize your project using NPM to create and populate a package.json file

// DONE: Require the Express package that you installed via NPM, and instantiate the app
// Remember to install express, and be sure that it's been added to your package.json as a dependency
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// DONE: Include all of the static resources as an argument to app.use()
app.use(express.static('./public'));


app.get('*', function(request, response) {
  // DONE: Using the response object, send the index.html file back to the user
  console.log('index.html to user');
  response.sendFile('./public/index.html', {root: '.'});
});

// DONE: (STRETCH) Write a new route that will handle a request and send the new.html file back to the user
app.get('/new.html', function(request, response) {
  console.log('new.html sent to user');
  response.sendFile('./public/new.html');
})

app.listen(PORT, function() {
  // DONE: Log to the console a message that lets you know which port your server has started on
  console.log('Our amazing app is being served localhost 3000!');
});
