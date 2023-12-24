```javascript
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const { DB_HOST, DB_PORT, DB_NAME, DB_USER, DB_PASSWORD } = process.env;

const uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

// Connect to the database
mongoose.connect(uri, options)
  .then(() => console.log('Database connection established!'))
  .catch((error) => console.error('Database connection error:', error));

// Create necessary directories
const directories = [
  './src/api/middleware',
  './src/api/routes',
  './src/api/validators',
  './test/integrationTests',
  './test/unitTests',
  './public/css',
  './public/js',
  './views/layouts',
];

directories.forEach((dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Directory created: ${dir}`);
  } else {
    console.log(`Directory already exists: ${dir}`);
  }
});

// Close the database connection
mongoose.connection.close(() => {
  console.log('Database connection closed.');
});
```

