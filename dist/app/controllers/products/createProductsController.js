"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductsController = void 0;
const ProductModel_1 = require("../../models/ProductModel");
async function createProductsController(req, res) {
    const { name, price, description, category, ingredients } = req.body;
    const imagePath = req.file?.filename;
    const product = await ProductModel_1.Product.create({
        name,
        price,
        description,
        imagePath,
        category,
        ingredients: ingredients ? JSON.parse(ingredients) : [],
    });
    res.status(201).json(product);
}
exports.createProductsController = createProductsController;
//# sourceMappingURL=createProductsController.js.map