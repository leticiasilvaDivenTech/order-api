"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCategoryController = void 0;
const CategoryModel_1 = require("../../models/CategoryModel");
async function updateCategoryController(request, response) {
    const { id } = request.params;
    const { name, icon } = request.body;
    const categoryExist = await CategoryModel_1.Category.findById(id);
    if (!categoryExist) {
        response.status(404).json({ error: 'Category id not found' });
    }
    if (!name) {
        return response.status(400).json({ error: 'Name is required' });
    }
    if (!icon) {
        return response.status(400).json({ error: 'Icon is required' });
    }
    const category = await CategoryModel_1.Category.findByIdAndUpdate(id, { name, icon }, { new: true });
    return response.json(category);
}
exports.updateCategoryController = updateCategoryController;
//# sourceMappingURL=updateCategoryController.js.map