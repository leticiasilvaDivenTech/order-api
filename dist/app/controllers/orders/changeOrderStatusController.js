"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeOrderStatusController = void 0;
const OrderModel_1 = require("../../models/OrderModel");
async function changeOrderStatusController(req, res) {
    const { orderId } = req.params;
    const { status } = req.body;
    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) {
        return res.status(400).json({ error: 'Status should be: WAITING, IN_PRODUCTION or DONE' });
    }
    await OrderModel_1.Order.findByIdAndUpdate(orderId, { status });
    return res.sendStatus(204);
}
exports.changeOrderStatusController = changeOrderStatusController;
//# sourceMappingURL=changeOrderStatusController.js.map