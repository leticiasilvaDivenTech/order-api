"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.io = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const node_path_1 = __importDefault(require("node:path"));
const node_http_1 = __importDefault(require("node:http"));
require("express-async-errors");
const routes_1 = require("./routes");
const errorHandler_1 = require("./app/middlewares/errorHandler");
const socket_io_1 = require("socket.io");
const port = 3001;
const app = (0, express_1.default)();
const server = node_http_1.default.createServer(app);
exports.io = new socket_io_1.Server(server);
async function start() {
    try {
        mongoose_1.default.set('strictQuery', true);
        await mongoose_1.default.connect('mongodb+srv://liviahelen025:Kk5diRDvmAgRTL6O@clusterorder.3szsp29.mongodb.net/test');
        app.use((req, res, next) => {
            res.setHeader('access-control-allow-origin', '*')
                .setHeader('access-control-allow-methods', '*')
                .setHeader('access-control-allow-headers', '*')
                .setHeader('access-control-max-age', 20);
            next();
        });
        app.use(express_1.default.json());
        app.use('/uploads', express_1.default.static(node_path_1.default.resolve(__dirname, '..', 'uploads')));
        app.use(routes_1.router);
        app.use(errorHandler_1.errorHandler);
        server.listen(port, () => console.log(`Running at http://localhost:${port}`));
    }
    catch (e) {
        console.log(e);
    }
}
start();
//# sourceMappingURL=index.js.map