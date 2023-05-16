"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCategoriesController = void 0;
const CategoryModel_1 = require("../../models/CategoryModel");
async function listCategoriesController(req, res) {
    const categories = await CategoryModel_1.Category.find();
    res.json(categories);
}
exports.listCategoriesController = listCategoriesController;
//# sourceMappingURL=listCategoriesController.js.map