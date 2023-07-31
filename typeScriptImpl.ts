import { promises as fs } from "fs";

interface LogEntry {
    timestamp: string;
    statusCode: string;
    endpoint: string;
}

async function readLogFile(): Promise<LogEntry[]> {
    const logFilePath = "/Users/shashikanth/log_digestion/api-dev-out.log";
    try {
        const logFile = await fs.readFile(logFilePath, "utf8");
        const lines = logFile.split("\n");
        const data: LogEntry[] = [];

        const httpStatusCodePattern = /" ([1-5]\d{2}) /;
        let currentLog: Partial<LogEntry> = {};

        for (const line of lines) {
            if (line.includes("GET ") || line.includes("POST ") || line.includes("PUT ") || line.includes("DELETE ")) {
                const [, timestamp, requestLine] = line.split(" +10:00: ");
                const [method, endpoint] = requestLine.match(/(GET|POST|PUT|DELETE) (.+?) HTTP/)?.slice(1, 3) || [];
                const statusCodeMatch = line.match(httpStatusCodePattern);

                if (method && endpoint && statusCodeMatch) {
                    const statusCode = statusCodeMatch[1];
                    currentLog = { timestamp, statusCode, endpoint: `${method} ${endpoint}` };
                }
            } else if (line.includes(" a request has been made and proccessed successfully at: ")) {
                if (Object.keys(currentLog).length > 0) {
                    data.push(currentLog as LogEntry);
                    currentLog = {};
                }
            }
        }

        return data;
    } catch (error: any) {
        console.error("Error reading file:", error.message);
        return [];
    }
}

function countHttpStatusCodes(data: LogEntry[]): Map<string, number> {
    const statusCodeCounts = new Map<string, number>();
    for (const entry of data) {
        const statusCode = entry.statusCode;
        const count = statusCodeCounts.get(statusCode) || 0;
        statusCodeCounts.set(statusCode, count + 1);
    }
    return statusCodeCounts;
}

async function main() {
    const data = await readLogFile();
    const statusCodeCounts = countHttpStatusCodes(data);

    // Convert the statusCodeCounts map to an array of objects for console.table
    const table = Array.from(statusCodeCounts.entries()).map(([statusCode, count]) => ({
        statusCode: statusCode,
        count: count,
    }));

    console.table(table);
}

main();
