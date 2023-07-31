import * as fs from 'fs';
import * as httpStatus from 'http-status-codes';

// Read the log file asynchronously
fs.readFile("/Users/shashikanth/log_digestion/api-dev-out.log", 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading the log file:', err);
        return;
    }

    // Process the logs and count status codes
    const logs: string[] = data.split('\n');
    const statusCounts: { [key: number]: number } = {};

    logs.forEach(log => {
        const statusCodeMatches = log.match( /^.*HTTP\/\d\.\d"\s+(\d{3})\b/);
        if (statusCodeMatches) {
            statusCodeMatches.forEach(match => {
                const statusCode = parseInt(match);
                try {
                    // Check if the status code exists in the httpStatus library
                    if (httpStatus.getReasonPhrase(statusCode)) {
                        statusCounts[statusCode] = statusCounts[statusCode] ? statusCounts[statusCode] + 1 : 1;
                    }
                } catch (error) {
                    // Handle the error for non-standard status codes
                    console.error(`Error: Status code does not exist: ${statusCode}`);
                }
            });
        }
    });

    // Prepare the output table with correct index messages
    const outputTable = Object.entries(statusCounts).map(([statusCode, count]) => ({
        index: httpStatus.getReasonPhrase(parseInt(statusCode)),
        statusCode: parseInt(statusCode),
        count,
    }));

    console.table(outputTable);
});
