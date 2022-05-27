const os = require('os');
const path = require('path');
const { Worker } = require('worker_threads');


const performCalculations = async (cpus) => {
    const workerPath = path.resolve(__dirname + '/worker.js');
    let num = 10;
    
    const result = await Promise.all(
        cpus.map(
            () => new Promise((resolve, reject) => {
                const worker = new Worker(workerPath, { workerData: num });
                num++

                const time = Date.now()

                worker.on('message', data => resolve({ status: 'resolved', data, time: Date.now() - time }))
                worker.on('error', data => reject({ status: 'rejected', data, time: Date.now() - time }))
            })
        )
    );

    console.log(result);
};

performCalculations([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]);
