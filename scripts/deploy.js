```javascript
const { exec } = require('child_process');
require('dotenv').config();

const { HOST, PORT } = process.env;

// Function to execute shell commands
const execShellCommand = cmd => new Promise((resolve, reject) => {
  exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.warn(`Error: ${error.message}`);
      reject(error);
    }
    if (stderr) {
      console.warn(`Warning: ${stderr}`);
      reject(new Error(stderr));
    }
    resolve(stdout ? stdout : null);
  });
});

// Deployment function
const deploy = async () => {
  try {
    console.log('Starting deployment...');

    // Install dependencies
    console.log('Installing dependencies...');
    await execShellCommand('npm install');

    // Build the project
    console.log('Building the project...');
    await execShellCommand('npm run build');

    // Start the server
    console.log('Starting the server...');
    await execShellCommand(`node src/app.js`);

    console.log(`Deployment successful! Server running on http://${HOST}:${PORT}`);
  } catch (error) {
    console.error(`Deployment failed: ${error.message}`);
  }
};

// Run deployment
deploy();
```
