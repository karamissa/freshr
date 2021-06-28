const express = require('express');
const apiRoutes = require('./routes/apiRoutes');

const app = express();

app.use('/spotify', apiRoutes);

app.listen(5000, () => {
  console.log('Listening on port 5000');
});
