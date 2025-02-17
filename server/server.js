const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;



app.use('/build', express.static(path.join(__dirname, '../build')));

app.get('/*', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../client/public/index.html'));
});




app.listen(port, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});
