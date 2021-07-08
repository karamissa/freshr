const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/apiRoutes');

dotenv.config();

const environment = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());

app.use('/spotify', apiRoutes);

if (environment === 'production') {
  app.use(express.static(path.join(__dirname, 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
