// Create web server
var express = require('express');
var app = express();
var port = 3000;

// Import the comments module
var comments = require('./comments');

// Create a route for getting all comments
app.get('/comments', function(req, res) {
  res.json(comments.getComments());
});

// Create a route for getting a single comment
app.get('/comments/:id', function(req, res) {
  var comment = comments.getComment(req.params.id);
  if (comment) {
    res.json(comment);
  } else {
    res.status(404).json({ error: 'Comment not found' });
  }
});

// Start the server
app.listen(port, function() {
  console.log('Server is running on http://localhost:' + port);
});