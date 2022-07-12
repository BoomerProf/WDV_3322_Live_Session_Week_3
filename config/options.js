const options = {
  origin: '*',
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Accept',
    'X-Requested-With',
    'Origin',
  ],
  methods: 'POST, GET, PATCH, PUT, DELETE',
  optionsSuccessStatus: 200,
  preflightContinue: false,
};

module.exports = options;