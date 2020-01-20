const Routes = () => {

    const route_handlers = {};

    const match = function (req) {
        const handler = route_handlers[req.url];
        return handler;
    }

    const get = function (path, handler) {
        route_handlers[path] = handler;
    }

    const post = function (path, handler) {
        route_handlers[path] = handler;
    }

    return {
        get: get,
        post: post,
        match: match
    }
}


module.exports = Routes();