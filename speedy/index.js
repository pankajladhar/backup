const http = require('http');
const Routes = require('./Routes');
const Response = require('./Response');
const speedy = () => {

    const server = http.createServer(function (req, res) {

        Response(res);

        const handler = Routes.match(req);
        if (handler) {
            handler(req, res)
        } else {
            res.writeHead(200);
            res.end('Route not found');
        }
    });


    const listen = function (port, cb) {
        server.listen(port);
        cb ? cb() : console.log(`Server is listening at port ${port}`);
    }

    return {
        listen: listen,
        get: Routes.get,
        post: Routes.post,
    }

}


module.exports = speedy;