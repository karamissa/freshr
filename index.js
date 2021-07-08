const path = require('path');
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.use('/spotify', apiRoutes);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
