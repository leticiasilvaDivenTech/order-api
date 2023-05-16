"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductsByCategoryController = void 0;
const ProductModel_1 = require("../../models/ProductModel");
async function listProductsByCategoryController(req, res) {
    const { categoryId } = req.params;
    if (!categoryId) {
        return res.status(400).json({ error: 'Category is required' });
    }
    const product = await ProductModel_1.Product.find().where('category').equals(categoryId);
    if (!categoryId) {
        return res.status(400).json({ error: 'Product not found' });
    }
    res.json(product);
}
exports.listProductsByCategoryController = listProductsByCategoryController;
//# sourceMappingURL=listProductsByCategoryController.js.map