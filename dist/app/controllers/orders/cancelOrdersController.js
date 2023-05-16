"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelOrdersController = void 0;
const OrderModel_1 = require("../../models/OrderModel");
async function cancelOrdersController(req, res) {
    const { orderId } = req.params;
    if (!orderId) {
        return res.status(400).json({ error: 'Order is required' });
    }
    await OrderModel_1.Order.findByIdAndDelete(orderId);
    res.sendStatus(204);
}
exports.cancelOrdersController = cancelOrdersController;
//# sourceMappingURL=cancelOrdersController.js.map