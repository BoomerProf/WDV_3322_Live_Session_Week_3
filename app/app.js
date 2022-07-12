const express = require('express');
const app = express();
const cors = require('cors');
const router = require('../api/routes/routes');
const options = require('../config/options');
// cors
app.use(cors(options));
// parses incoming requests with JSON payloads
app.use(express.json());
// the URL-encoded data will be parsed with the qs library.
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/users', router);

// add middleware to handle errors and bad url paths
app.use((req, res, next) => {
  const error = new Error('NOT FOUND!!!');
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500).json({
    error: {
      message: error.message,
      status: error.status,
    },
  });
});
module.exports = app;
