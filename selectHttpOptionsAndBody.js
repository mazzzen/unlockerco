import {
    __assign,
    __spreadArray
} from "tslib";
import {
    print
} from 'graphql';;
var defaultHttpOptions = {
    includeQuery: true,
    includeExtensions: false,
    preserveHeaderCase: false,
};
var defaultHeaders = {
    accept: '*/*',
    'content-type': 'application/json',
};
var defaultOptions = {
    method: 'POST',
};
export var fallbackHttpConfig = {
    http: defaultHttpOptions,
    headers: defaultHeaders,
    options: defaultOptions,
};
export var defaultPrinter = function(ast, printer) {
    return printer(ast);
};
export function selectHttpOptionsAndBody(operation, fallbackConfig) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    configs.unshift(fallbackConfig);
    return selectHttpOptionsAndBodyInternal.apply(void 0, __spreadArray([operation,
        defaultPrinter
    ], configs, false));
}
export function selectHttpOptionsAndBodyInternal(operation, printer) {
    var configs = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        configs[_i - 2] = arguments[_i];
    }
    var options = {};
    var http = {};
    configs.forEach(function(config) {
        options = __assign(__assign(__assign({}, options), config.options), {
            headers: __assign(__assign({}, options.headers), config.headers)
        });
        if (config.credentials) {
            options.credentials = config.credentials;
        }
        http = __assign(__assign({}, http), config.http);
    });
    if (options.headers) {
        options.headers = removeDuplicateHeaders(options.headers, http.preserveHeaderCase);
    }
    var operationName = operation.operationName,
        extensions = operation.extensions,
        variables = operation.variables,
        query = operation.query;
    var body = {
        operationName: operationName,
        variables: variables
    };
    if (http.includeExtensions)
        body.extensions = extensions;
    if (http.includeQuery)
        body.query = printer(query, print);
    return {
        options: options,
        body: body,
    };
};

function removeDuplicateHeaders(headers, preserveHeaderCase) {
    if (!preserveHeaderCase) {
        var normalizedHeaders_1 = Object.create(null);
        Object.keys(Object(headers)).forEach(function(name) {
            normalizedHeaders_1[name.toLowerCase()] = headers[name];
        });
        return normalizedHeaders_1;
    }
    var headerData = Object.create(null);
    Object.keys(Object(headers)).forEach(function(name) {
        headerData[name.toLowerCase()] = {
            originalName: name,
            value: headers[name]
        };
    });
    var normalizedHeaders = Object.create(null);
    Object.keys(headerData).forEach(function(name) {
        normalizedHeaders[headerData[name].originalName] = headerData[name].value;
    });
    return normalizedHeaders;
}
//# sourceMappingURL=selectHttpOptionsAndBody.js.map