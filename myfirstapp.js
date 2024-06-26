var http = require('http');

// ---------Chapter 1 ----------
var Listener = function (req, res) {
    //-------------head for HTML-----------
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end('<h2 style = "text-align: center;">Hello World</h2>');
}

server = http.createServer(Listener);
server.listen(3000);


console.log("Server running at http://127.0.0.1");

// ---------Chapter 2 ----------
// const server = http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html'
//     });
//     res.end('<h2 style = "text-align: center;">Hello World</h2>')
// });

// server.listen(3200, '127.0.0.1', () => {
//     console.log('Listening to reqiests on port 3200');
// });


