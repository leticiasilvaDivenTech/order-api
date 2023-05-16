"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductController = void 0;
const ProductModel_1 = require("../../models/ProductModel");
async function deleteProductController(req, res) {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'Product id is required' });
    }
    await ProductModel_1.Product.findByIdAndDelete(id);
    res.sendStatus(204);
}
exports.deleteProductController = deleteProductController;
//# sourceMappingURL=deleteProductsController.js.map