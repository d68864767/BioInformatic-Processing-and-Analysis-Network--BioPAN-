const cluster = require('cluster');
const logger = require('../utils/logger');

// Task queue
let taskQueue = [];

// Function to add a task to the queue
const addTask = (task) => {
  taskQueue.push(task);
  logger.info(`Task added to queue. Queue length: ${taskQueue.length}`);
};

// Function to process the task queue
const processQueue = () => {
  if (taskQueue.length > 0) {
    const task = taskQueue.shift();
    const worker = cluster.fork();

    worker.send(task);
    logger.info(`Task sent to worker ${worker.id}`);

    worker.on('message', (message) => {
      if (message.status === 'completed') {
        logger.info(`Task completed by worker ${worker.id}`);
        worker.kill();
      }
    });

    worker.on('exit', () => {
      logger.info(`Worker ${worker.id} exited`);
    });
  }
};

// Function to start the task scheduler
const startScheduler = () => {
  setInterval(processQueue, 1000);
  logger.info('Task scheduler started');
};

module.exports = {
  addTask,
  startScheduler
};
