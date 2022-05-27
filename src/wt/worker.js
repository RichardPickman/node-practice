// n should be received from main thread
const { parentPort, workerData } = require('worker_threads');

const data = workerData;

const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => nthFibonacci(data);

parentPort.postMessage(sendResult());
