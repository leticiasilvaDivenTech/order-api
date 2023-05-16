"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCategoriesController = void 0;
const CategoryModel_1 = require("../../models/CategoryModel");
async function createCategoriesController(req, res) {
    const { name, icon } = req.body;
    if (!name) {
        return res.status(400).json({ error: 'Name is required ' });
    }
    if (!icon) {
        return res.status(400).json({ error: 'Icon is required ' });
    }
    const category = await CategoryModel_1.Category.create({ name, icon });
    res.status(201).json(category);
}
exports.createCategoriesController = createCategoriesController;
//# sourceMappingURL=createCategoriesController.js.map