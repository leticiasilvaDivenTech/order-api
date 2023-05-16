"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listOrdersController = void 0;
const OrderModel_1 = require("../../models/OrderModel");
async function listOrdersController(req, res) {
    const orders = await OrderModel_1.Order
        .find()
        .sort({ createdAt: 1 })
        .populate('products.product');
    res.json(orders);
}
exports.listOrdersController = listOrdersController;
//# sourceMappingURL=listOrdersController.js.map