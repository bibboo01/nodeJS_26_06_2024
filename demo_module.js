var http = require('http');

//----------import mydatamodule.js-----------
var dt = require('./mydatemodule');

http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-type': 'text/html'
    });
    //-----------cal function mydatatime() in mydatamodule---------
    res.write("The Date and Time are currently:" + dt.myDataTime());
    res.end();
}).listen(8000);

console.log("Server running at http://127.0.0.1");