const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... database query to fetch user data using userId ...
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.json(user);
  } catch (error) {
    console.error('Database error:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Improved Error Handling:
// The async/await syntax and try...catch block handle potential errors during the database query.
// If an error occurs, a 500 Internal Server Error is returned to the client with a generic error message.  The console also logs the details of the error for debugging purposes.