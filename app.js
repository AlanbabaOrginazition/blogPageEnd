const os = require('os');
const cluster = require('cluster');
const { createServer } = require('./server/index');

const numCpus = os.cpus().length;
if (cluster.isMaster) {
  console.log(`[master] start master...`);
  for (let i = 0; i < numCpus; i++) {
    cluster.fork();
  }
  cluster.on('listening', (worker, address) => {
    console.log(`[master] listening: worker ${worker.id}, pid: ${worker.process.pid}, address: ${address.address}:${address.port}`);
  });
  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} is died`);
    cluster.fork();
  });
} else if (cluster.isWorker) {
  console.log(`[worker] start worker...${cluster.worker.id}`);
  createServer();
}