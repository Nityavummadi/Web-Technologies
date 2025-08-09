// Example vulnerable JavaScript code for CodeQL scan
const http = require('http');
const url = require('url');

http.createServer((req, res) => {
    let q = url.parse(req.url, true).query;
    // Vulnerability: Directly using user input without sanitization
    res.write(`Hello ${q.name}`);
    res.end();
}).listen(8080);

console.log("Server running at http://localhost:8080/");
