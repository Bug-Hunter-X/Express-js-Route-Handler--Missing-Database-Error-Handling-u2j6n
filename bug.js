const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database query to fetch user data using userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.json(user);
});

// Problem:  The code lacks proper error handling. If the database query fails or throws an error, the application will crash without providing any informative error message to the client.

// Additional context:  This is a common issue when developers directly handle database operations within the Express request handlers.  Robust error handling ensures that application remains functional while providing user-friendly error feedback.