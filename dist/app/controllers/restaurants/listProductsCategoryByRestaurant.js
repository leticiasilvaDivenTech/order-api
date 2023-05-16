"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listProductsCategoryByRestaurant = void 0;
const ProductModel_1 = require("../../models/ProductModel");
const CategoryModel_1 = require("../../models/CategoryModel");
const RestaurantModel_1 = require("../../models/RestaurantModel");
async function listProductsCategoryByRestaurant(req, res) {
    const { categoryId, restaurantCode } = req.params;
    const restaurant = await RestaurantModel_1.Restaurant.findOne({ code: restaurantCode });
    const category = await CategoryModel_1.Category.findById(categoryId);
    if (!restaurant) {
        return res.status(404).json({ error: 'Restaurante not found' });
    }
    if (!category) {
        return res.status(404).json({ error: 'Category not found' });
    }
    const products = await ProductModel_1.Product.find({ category: category._id, restaurant: restaurant._id });
    res.json(products);
}
exports.listProductsCategoryByRestaurant = listProductsCategoryByRestaurant;
//# sourceMappingURL=listProductsCategoryByRestaurant.js.map