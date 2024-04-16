"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericErrorHandler = exports.methodNotAllowed = void 0;
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const build_errors_1 = __importDefault(require("../utils/build-errors"));
function methodNotAllowed(req, res) {
    res.status(http_status_codes_1.default.METHOD_NOT_ALLOWED).json({
        error: {
            code: http_status_codes_1.default.METHOD_NOT_ALLOWED,
            message: http_status_codes_1.default.getStatusText(http_status_codes_1.default.METHOD_NOT_ALLOWED),
        },
    });
}
exports.methodNotAllowed = methodNotAllowed;
const genericErrorHandler = (err, req, res, next) => {
    const error = (0, build_errors_1.default)(err);
    res.status(error.code).json({ error });
};
exports.genericErrorHandler = genericErrorHandler;
//# sourceMappingURL=errors.middleware.js.map