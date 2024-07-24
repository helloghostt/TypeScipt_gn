const http = require('http');
const server = http.createServer((req, res) => {
    const path = url.parse(req.url, true).pathname;

    if (path == "/user") {
    } else if (path == "/feed") {
    } else if (path == "/community") {
    } else if (path == "/order") {
    } else if (path == "/mypage") {
    } else if (path == "/feed") {
    }
    res.setHeader('Content-Type', 'text/html');
    res.end('OK');

})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});