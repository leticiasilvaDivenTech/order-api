"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
function errorHandler(error, req, res, next) {
    console.log(error);
    res.sendStatus(500);
}
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map