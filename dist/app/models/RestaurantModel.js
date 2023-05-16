"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Restaurant = exports.RestaurantSchema = void 0;
const mongoose_1 = require("mongoose");
const crypto_1 = __importDefault(require("crypto"));
exports.RestaurantSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    code: {
        type: String,
        unique: true,
    },
});
exports.RestaurantSchema.pre('save', async function (next) {
    if (!this.code) {
        const randomCode = crypto_1.default.randomBytes(3).toString('hex');
        this.code = randomCode.toUpperCase();
    }
    next();
});
exports.Restaurant = (0, mongoose_1.model)('Restaurant', exports.RestaurantSchema);
//# sourceMappingURL=RestaurantModel.js.map