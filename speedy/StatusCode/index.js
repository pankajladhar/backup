const StatusCode = {
    "100": {"label" : "continue" },
    "101": {"label" : "switching protocols" },
    "102": {"label" : "processing" },
    "200": {"label" : "ok" },
    "201": {"label" : "created" },
    "202": {"label" : "accepted" },
    "203": {"label" : "non-authoritative information" },
    "204": {"label" : "no content" },
    "205": {"label" : "reset content" },
    "206": {"label" : "partial content" },
    "207": {"label" : "multi-status" },
    "208": {"label" : "already reported" },
    "226": {"label" : "im used" },
    "300": {"label" : "multiple choices" },
    "301": {"label" : "moved permanently" },
    "302": {"label" : "found" },
    "303": {"label" : "see other" },
    "304": {"label" : "not modified" },
    "305": {"label" : "use proxy" },
    "307": {"label" : "temporary redirect" },
    "308": {"label" : "permanent redirect" },
    "400": {"label" : "bad request" },
    "401": {"label" : "unauthorized" },
    "402": {"label" : "payment required" },
    "403": {"label" : "forbidden" },
    "404": {"label" : "not found" },
    "405": {"label" : "method not allowed" },
    "406": {"label" : "not acceptable" },
    "407": {"label" : "proxy authentication required" },
    "408": {"label" : "request timeout" },
    "409": {"label" : "conflict" },
    "410": {"label" : "gone" },
    "411": {"lable" : "length required" },
    "412": {"lable" : "precondition failed" },
    "413": {"lable" : "payload too large" },
    "414": {"lable" : "uri too long" },
    "415": {"lable" : "unsupported media type" },
    "416": {"lable" : "range not satisfiable" },
    "417": {"lable" : "expectation failed" },
    "418": {"lable" : "I'm a teapot" },
    "422": {"lable" : "unprocessable entity" },
    "423": {"lable" : "locked" },
    "424": {"lable" : "failed dependency" },
    "426": {"lable" : "upgrade required" },
    "428": {"lable" : "precondition required" },
    "429": {"lable" : "too many requests" },
    "431": {"lable" : "request header fields too large" },
    "500": {"lable" : "internal server error" },
    "501": {"lable" : "not implemented" },
    "502": {"lable" : "bad gateway" },
    "503": {"lable" : "service unavailable" },
    "504": {"lable" : "gateway timeout" },
    "505": {"lable" : "http version not supported" },
    "506": {"lable" : "variant also negotiates" },
    "507": {"lable" : "insufficient storage" },
    "508": {"lable" : "loop detected" },
    "510": {"lable" : "not extended" },
    "511": {"lable" : "network authentication required" }
};

module.exports = StatusCode;