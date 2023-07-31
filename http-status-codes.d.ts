declare module 'http-status-codes' {
    export function getReasonPhrase(statusCode: number): string | undefined;
}
