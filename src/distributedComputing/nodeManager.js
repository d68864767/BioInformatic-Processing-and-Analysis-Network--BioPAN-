const os = require('os');
const cluster = require('cluster');
const logger = require('../utils/logger');

// Get the number of CPU cores
const numCPUs = os.cpus().length;

// Create a worker for each CPU core
const createWorkers = () => {
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    logger.error(`Worker ${worker.process.pid} died with code: ${code}, and signal: ${signal}`);
    logger.info('Starting a new worker');
    cluster.fork();
  });
};

// If the process is a master process, create workers
// If the process is a worker process, start the server
if (cluster.isMaster) {
  logger.info(`Master ${process.pid} is running`);

  createWorkers();

  cluster.on('online', (worker) => {
    logger.info(`Worker ${worker.process.pid} is online`);
  });
} else {
  require('../app');
  logger.info(`Worker ${process.pid} started`);
}

module.exports = createWorkers;
