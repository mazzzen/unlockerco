import {
    __awaiter,
    __generator
} from "tslib";
import {
    responseIterator
} from "./responseIterator.js";
import {
    throwServerError
} from "../utils/index.js";
var hasOwnProperty = Object.prototype.hasOwnProperty;
export function readMultipartBody(response, observer) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function() {
        var decoder, contentType, delimiter, boundaryVal, boundary, buffer, iterator, running, _d, value, done, chunk, bi, message, i, headers, contentType_1, body, result;
        var _e;
        return __generator(this, function(_f) {
            switch (_f.label) {
                case 0:
                    if (TextDecoder === undefined) {
                        throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                    }
                    decoder = new TextDecoder("utf-8");
                    contentType = (_a = response.headers) === null || _a === void 0 ? void 0 : _a.get('content-type');
                    delimiter = "boundary=";
                    boundaryVal = (contentType === null || contentType === void 0 ? void 0 : contentType.includes(delimiter)) ?
                        contentType === null || contentType === void 0 ? void 0 : contentType.substring((contentType === null || contentType === void 0 ? void 0 : contentType.indexOf(delimiter)) + delimiter.length).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() :
                        "-";
                    boundary = "--".concat(boundaryVal);
                    buffer = "";
                    iterator = responseIterator(response);
                    running = true;
                    _f.label = 1;
                case 1:
                    if (!running) return [3, 3];
                    return [4, iterator.next()];
                case 2:
                    _d = _f.sent(), value = _d.value, done = _d.done;
                    chunk = typeof value === "string" ? value : decoder.decode(value);
                    running = !done;
                    buffer += chunk;
                    bi = buffer.indexOf(boundary);
                    while (bi > -1) {
                        message = void 0;
                        _e = [
                            buffer.slice(0, bi),
                            buffer.slice(bi + boundary.length),
                        ], message = _e[0], buffer = _e[1];
                        if (message.trim()) {
                            i = message.indexOf("\r\n\r\n");
                            headers = parseHeaders(message.slice(0, i));
                            contentType_1 = headers["content-type"];
                            if (contentType_1 &&
                                contentType_1.toLowerCase().indexOf("application/json") === -1) {
                                throw new Error("Unsupported patch content type: application/json is required.");
                            }
                            body = message.slice(i);
                            try {
                                result = parseJsonBody(response, body.replace("\r\n", ""));
                                if (Object.keys(result).length > 1 ||
                                    "data" in result ||
                                    "incremental" in result ||
                                    "errors" in result) {
                                    (_b = observer.next) === null || _b === void 0 ? void 0 : _b.call(observer, result);
                                }
                            } catch (err) {
                                handleError(err, observer);
                            }
                        }
                        bi = buffer.indexOf(boundary);
                    }
                    return [3, 1];
                case 3:
                    (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
                    return [2];
            }
        });
    });
}
export function parseHeaders(headerText) {
    var headersInit = {};
    headerText.split("\n").forEach(function(line) {
        var i = line.indexOf(":");
        if (i > -1) {
            var name_1 = line.slice(0, i).trim().toLowerCase();
            var value = line.slice(i + 1).trim();
            headersInit[name_1] = value;
        }
    });
    return headersInit;
}
export function parseJsonBody(response, bodyText) {
    if (response.status >= 300) {
        var getResult = function() {
            try {
                return JSON.parse(bodyText);
            } catch (err) {
                return bodyText;
            }
        };
        throwServerError(response, getResult(), "Response not successful: Received status code ".concat(response.status));
    }
    try {
        return JSON.parse(bodyText);
    } catch (err) {
        var parseError = err;
        parseError.name = "ServerParseError";
        parseError.response = response;
        parseError.statusCode = response.status;
        parseError.bodyText = bodyText;
        throw parseError;
    }
}
export function handleError(err, observer) {
    var _a, _b;
    if (err.name === "AbortError")
        return;
    if (err.result && err.result.errors && err.result.data) {
        (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, err.result);
    }
    (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, err);
}
export function readJsonBody(response, operation, observer) {
    parseAndCheckHttpResponse(operation)(response)
        .then(function(result) {
            var _a, _b;
            (_a = observer.next) === null || _a === void 0 ? void 0 : _a.call(observer, result);
            (_b = observer.complete) === null || _b === void 0 ? void 0 : _b.call(observer);
        })
        .catch(function(err) {
            return handleError(err, observer);
        });
}
export function parseAndCheckHttpResponse(operations) {
    return function(response) {
        return response
            .text()
            .then(function(bodyText) {
                return parseJsonBody(response, bodyText);
            })
            .then(function(result) {
                if (response.status >= 300) {
                    throwServerError(response, result, "Response not successful: Received status code ".concat(response.status));
                }
                if (!Array.isArray(result) &&
                    !hasOwnProperty.call(result, "data") &&
                    !hasOwnProperty.call(result, "errors")) {
                    throwServerError(response, result, "Server response was missing for query '".concat(Array.isArray(operations) ?
                        operations.map(function(op) {
                            return op.operationName;
                        }) :
                        operations.operationName, "'."));
                }
                return result;
            });
    };
}
//# sourceMappingURL=parseAndCheckHttpResponse.js.map