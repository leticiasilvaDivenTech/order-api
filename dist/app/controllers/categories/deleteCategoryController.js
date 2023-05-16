"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryController = void 0;
const CategoryModel_1 = require("../../models/CategoryModel");
async function deleteCategoryController(req, res) {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ error: 'Category id is required' });
    }
    await CategoryModel_1.Category.findByIdAndDelete(id);
    res.sendStatus(204);
}
exports.deleteCategoryController = deleteCategoryController;
//# sourceMappingURL=deleteCategoryController.js.map