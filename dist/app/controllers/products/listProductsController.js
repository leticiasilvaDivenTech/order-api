"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductsController = void 0;
const ProductModel_1 = require("../../models/ProductModel");
async function listProductsController(req, res) {
    const products = await ProductModel_1.Product.find();
    res.json(products);
}
exports.listProductsController = listProductsController;
//# sourceMappingURL=listProductsController.js.map