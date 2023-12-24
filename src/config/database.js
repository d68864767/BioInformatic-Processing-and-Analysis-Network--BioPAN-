const mongoose = require('mongoose');
require('dotenv').config();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

mongoose.connect(uri, options)
  .then(() => console.log('Database connection established!'))
  .catch((error) => console.error('Database connection error:', error));

module.exports = mongoose;
