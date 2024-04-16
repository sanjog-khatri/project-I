"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const zod_1 = require("zod");
function buildError(error) {
    // Validation errors
    if (error instanceof zod_1.ZodError) {
        return {
            code: http_status_codes_1.default.BAD_REQUEST,
            message: http_status_codes_1.default.getStatusText(http_status_codes_1.default.BAD_REQUEST),
            details: error.issues.map((issue) => issue.message),
        };
    }
    // console.log(' got boomed');
    // HTTP errors
    if (error.isBoom) {
        return {
            code: error.output.statusCode,
            message: error.output.payload.message || error.output.payload.error,
        };
    }
    console.log('here?');
    console.log(error);
    // Return INTERNAL_SERVER_ERROR for all other cases
    return {
        code: http_status_codes_1.default.INTERNAL_SERVER_ERROR,
        message: http_status_codes_1.default.getStatusText(http_status_codes_1.default.INTERNAL_SERVER_ERROR),
    };
}
exports.default = buildError;
//# sourceMappingURL=build-errors.js.map