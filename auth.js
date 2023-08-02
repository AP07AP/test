const express = require('express');
const router = express.Router();

// Your user authentication routes here
// Example:
router.post('/register', (req, res) => {
  // User registration logic here
  res.send('User registered successfully');
});

router.post('/login', (req, res) => {
  // User login logic here
  res.send('User logged in successfully');
});

module.exports = router;
/* End of user authentication routes */
