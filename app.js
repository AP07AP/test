const express = require('express');
const app = express();
const port = 3000;

// Your backend code here
// Example:
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
/* End of backend code */

