const StatusCode = require('./../StatusCode');
const Response = (res) => {

    res.send = (body) => {
        res.setHeader('Content-Type', 'text/plain');
        res.setHeader('Content-Length', body.length);
        res.writeHead(200);
        res.end(body);
    }

    res.json = (body) => {
        body = JSON.stringify(body);
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Content-Length', body.length);
        res.writeHead(200);
        res.end(body);
    }

    res.redirect = (url) => {
        res.setHeader('Location', url);
        res.writeHead(301)
        res.end();

    }
    return res;
}


module.exports = Response;