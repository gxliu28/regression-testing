function batchProcess(data) {
    let processedData = data.map(item => item * 2);
    return processedData;
}

module.exports = batchProcess;
