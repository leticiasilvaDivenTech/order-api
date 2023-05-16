"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrdersController = void 0;
const OrderModel_1 = require("../../models/OrderModel");
const index_1 = require("../../../index");
async function createOrdersController(req, res) {
    const { table, products } = req.body;
    const order = await OrderModel_1.Order.create({ table, products });
    const orderDetails = await order.populate('products.product');
    index_1.io.emit('order@new', orderDetails);
    res.status(201).json(order);
}
exports.createOrdersController = createOrdersController;
//# sourceMappingURL=createOrdersController.js.map