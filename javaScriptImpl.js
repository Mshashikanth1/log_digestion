const fs = require("fs").promises;

const readLogFile = async () => {
    //this should be the path of you log

    const logFilePath = "/Users/shashikanth/log_digestion/api-dev-out.log";
    try {
        const logFile = await fs.readFile(logFilePath, "utf8");
        return logFile;
    } catch (error) {
        console.error('Error reading file:', error.message);
        return null;
    }
};

const getPerMinuteData = (data) => {
    const perMinuteData = {};
    const lines = data.split("\n");
    for (const line of lines) {
        const [timestamp, statusCode, endpoint] = line.split(" ");
        if (timestamp && statusCode && endpoint) {
            const minute = timestamp.substring(11, 13);
            if (!perMinuteData[minute]) {
                perMinuteData[minute] = {
                    statusCodes: [],
                };
            }
            perMinuteData[minute].statusCodes.push(statusCode);
        }
    }
    return perMinuteData;
};

const getStatusCodeCounts = (perMinuteData) => {
    const statusCodeCounts = {};
    for (const minute in perMinuteData) {
        const statusCodes = perMinuteData[minute].statusCodes;
        for (const statusCode of statusCodes) {
            if (!statusCodeCounts[statusCode]) {
                statusCodeCounts[statusCode] = 0;
            }
            statusCodeCounts[statusCode]++;
        }
    }
    return statusCodeCounts;
};

const main = async () => {
    const logFile = await readLogFile();
    if (!logFile) {
        return;
    }

    const perMinuteData = getPerMinuteData(logFile);
    const statusCodeCounts = getStatusCodeCounts(perMinuteData);

    // Convert the statusCodeCounts object to an array of objects for console.table
    const table = Object.entries(statusCodeCounts).map(([statusCode, count]) => ({
        statusCode: statusCode,
        count: count,
    }));

    console.table(table);
};

main();
