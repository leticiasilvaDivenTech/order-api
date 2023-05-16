"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
class ApiError extends Error {
    constructor(status, message) {
        super(message);
        this.status = status;
    }
    static BadRequest(message) {
        return new ApiError(http_status_codes_1.StatusCodes.BAD_REQUEST, message);
    }
    static Unauthorized(message) {
        return new ApiError(http_status_codes_1.StatusCodes.UNAUTHORIZED, message);
    }
    static Forbidden(message) {
        return new ApiError(http_status_codes_1.StatusCodes.FORBIDDEN, message);
    }
    static NotFound(message) {
        return new ApiError(http_status_codes_1.StatusCodes.NOT_FOUND, message);
    }
    static Conflict(message) {
        return new ApiError(http_status_codes_1.StatusCodes.CONFLICT, message);
    }
    static InternalServerError(message) {
        return new ApiError(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR, message);
    }
}
exports.default = ApiError;
//# sourceMappingURL=apiError.js.map